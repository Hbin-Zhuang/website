#!/usr/bin/env node

import { promises as fs } from 'node:fs'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 碎片化笔记处理脚本
class FragmentProcessor {
  constructor() {
    this.fragmentsDir = join(__dirname, '..', 'temp', 'youdao-fragments')
    this.notesDir = join(__dirname, '..', 'src', 'content', 'blog')
    this.fragmentTemplate = `---
title: '{{title}}'
description: '{{description}}'
date: '{{date}}'
lang: 'zh-CN'
category: 'notes'
tag: '{{tag}}'
tags: {{tags}}
draft: false
---

{{content}}

---

<small style="opacity: 0.5; font-size: 0.75rem;">*整理自有道云笔记* 📝</small>`
  }

  // 创建必要的目录
  async ensureDirectories() {
    await fs.mkdir(this.fragmentsDir, { recursive: true })
    await fs.mkdir(this.notesDir, { recursive: true })
  }

  // 按主题自动分类文档
  categorizeByContent(content) {
    const techKeywords = [
      'vue',
      'react',
      'javascript',
      'css',
      'html',
      'node',
      'webpack',
      'vite',
      '前端',
      '技术',
      'api',
      'github',
    ]
    const aiKeywords = [
      'ai',
      'gpt',
      'llm',
      '人工智能',
      '机器学习',
      'claude',
      'openai',
    ]
    const toolKeywords = ['工具', 'tool', '效率', '软件', '插件', 'extension']
    const lifeKeywords = ['生活', '思考', '感悟', '随笔', '日记']

    const lowerContent = content.toLowerCase()

    if (techKeywords.some(keyword => lowerContent.includes(keyword))) {
      return { category: 'tech', tag: 'tech' }
    }
    else if (aiKeywords.some(keyword => lowerContent.includes(keyword))) {
      return { category: 'tech', tag: 'ai' }
    }
    else if (toolKeywords.some(keyword => lowerContent.includes(keyword))) {
      return { category: 'tech', tag: 'tools' }
    }
    else if (lifeKeywords.some(keyword => lowerContent.includes(keyword))) {
      return { category: 'life', tag: 'thoughts' }
    }
    else {
      return { category: 'notes', tag: 'misc' }
    }
  }

  // 从内容中提取标题
  extractTitleFromContent(content) {
    // 尝试从 markdown 标题中提取
    const headingMatch = content.match(/^# (.+)$/m)
    if (headingMatch) {
      return headingMatch[1].trim()
    }

    // 尝试从第一行提取（如果是短句）
    const firstLine = content.split('\n')[0].trim()
    if (firstLine.length > 0 && firstLine.length < 50) {
      return firstLine
    }

    // 使用内容的前30个字符作为标题
    return `${content.substring(0, 30).trim()}...`
  }

  // 生成描述
  generateDescription(content) {
    // 移除 markdown 语法
    const cleaned = content
      .replace(/#{1,6}\s/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/\n+/g, ' ')
      .trim()

    return cleaned.length > 80 ? `${cleaned.substring(0, 80)}...` : cleaned
  }

  // 根据内容生成标签
  generateTags(content, category) {
    const tags = []
    const lowerContent = content.toLowerCase()

    // 基础分类标签
    tags.push(category === 'tech' ? 'technology' : category)

    // 根据内容添加具体标签
    if (lowerContent.includes('vue'))
      tags.push('vue')
    if (lowerContent.includes('react'))
      tags.push('react')
    if (lowerContent.includes('javascript') || lowerContent.includes('js'))
      tags.push('javascript')
    if (lowerContent.includes('css'))
      tags.push('css')
    if (lowerContent.includes('ai') || lowerContent.includes('人工智能'))
      tags.push('ai')
    if (lowerContent.includes('工具') || lowerContent.includes('tool'))
      tags.push('tools')
    if (lowerContent.includes('学习') || lowerContent.includes('learning'))
      tags.push('learning')

    // 去重并限制数量
    return [...new Set(tags)].slice(0, 5)
  }

  // 处理单个碎片文件
  async processFragment(filePath, outputDate) {
    const content = await fs.readFile(filePath, 'utf8')

    // 自动分类
    const { category, tag } = this.categorizeByContent(content)

    // 提取标题
    const title = this.extractTitleFromContent(content)

    // 生成描述
    const description = this.generateDescription(content)

    // 生成标签
    const tags = this.generateTags(content, category)

    // 生成日期（如果没有指定）
    const date = outputDate || new Date().toISOString().split('T')[0]

    // 替换模板
    const output = this.fragmentTemplate
      .replace('{{title}}', title)
      .replace('{{description}}', description)
      .replace('{{date}}', date)
      .replace('{{tag}}', tag)
      .replace('{{tags}}', JSON.stringify(tags))
      .replace('{{content}}', content)

    // 生成输出文件名
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50)

    const outputPath = join(this.notesDir, `${date}-${slug}.md`)
    await fs.writeFile(outputPath, output, 'utf8')

    return {
      input: filePath,
      output: outputPath,
      title,
      category,
      tags: tags.length,
    }
  }

  // 批量处理碎片文件
  async processBatch(inputDir, startDate) {
    await this.ensureDirectories()

    const files = await fs.readdir(inputDir)
    const markdownFiles = files.filter(file => file.endsWith('.md'))

    const results = []
    const currentDate = new Date(startDate || '2024-01-01')

    for (const file of markdownFiles) {
      const filePath = join(inputDir, file)
      const dateString = currentDate.toISOString().split('T')[0]

      try {
        const result = await this.processFragment(filePath, dateString)
        results.push(result)

        // 每个文件间隔一天（模拟时间维度）
        currentDate.setDate(currentDate.getDate() + 1)

        console.log(`✅ 处理完成: ${file} -> ${result.title}`)
      }
      catch (error) {
        console.error(`❌ 处理失败: ${file}`, error.message)
      }
    }

    // 输出处理统计
    console.log(`\n📊 处理统计:`)
    console.log(`📄 总文件数: ${markdownFiles.length}`)
    console.log(`✅ 成功处理: ${results.length}`)
    console.log(`❌ 失败数量: ${markdownFiles.length - results.length}`)

    const categories = results.reduce((acc, r) => {
      acc[r.category] = (acc[r.category] || 0) + 1
      return acc
    }, {})

    console.log(`\n📂 分类统计:`)
    Object.entries(categories).forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count} 篇`)
    })

    return results
  }

  // 预览模式：分析内容不实际创建文件
  async previewBatch(inputDir) {
    const files = await fs.readdir(inputDir)
    const markdownFiles = files.filter(file => file.endsWith('.md'))

    console.log(`📁 发现 ${markdownFiles.length} 个 Markdown 文件\n`)

    for (const file of markdownFiles.slice(0, 5)) {
      // 只预览前5个
      const filePath = join(inputDir, file)
      const content = await fs.readFile(filePath, 'utf8')

      const { category, tag } = this.categorizeByContent(content)
      const title = this.extractTitleFromContent(content)
      const tags = this.generateTags(content, category)

      console.log(`📄 ${file}`)
      console.log(`   标题: ${title}`)
      console.log(`   分类: ${category}`)
      console.log(`   主标签: ${tag}`)
      console.log(`   标签: [${tags.join(', ')}]`)
      console.log(`   长度: ${content.length} 字符\n`)
    }

    if (markdownFiles.length > 5) {
      console.log(`... 还有 ${markdownFiles.length - 5} 个文件`)
    }
  }
}

// 命令行接口
async function main() {
  const args = process.argv.slice(2)
  const processor = new FragmentProcessor()

  if (args.length === 0) {
    console.log(`
用法:
  npm run process-fragments preview <输入目录>     # 预览模式
  npm run process-fragments process <输入目录> [起始日期]  # 处理模式

示例:
  npm run process-fragments preview ./temp/youdao-export
  npm run process-fragments process ./temp/youdao-export 2024-01-01
`)
    return
  }

  const command = args[0]
  const inputDir = args[1]

  if (!inputDir) {
    console.error('❌ 请指定输入目录')
    return
  }

  try {
    await fs.access(inputDir)
  }
  catch {
    console.error(`❌ 目录不存在: ${inputDir}`)
    return
  }

  switch (command) {
    case 'preview':
      await processor.previewBatch(inputDir)
      break
    case 'process': {
      const startDate = args[2]
      await processor.processBatch(inputDir, startDate)
      break
    }
    default:
      console.error('❌ 未知命令，使用 preview 或 process')
  }
}

main().catch(console.error)
