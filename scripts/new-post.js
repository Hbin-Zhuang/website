#!/usr/bin/env node

import { promises as fs } from 'node:fs'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 博客文章模板
const BLOG_TEMPLATE = `---
title: '{{title}}'
description: '{{description}}'
date: '{{date}}'
lang: '{{lang}}'
draft: true
tag: '{{tag}}'
---

## 写作提纲

- 背景介绍
- 问题描述
- 解决方案
- 总结

## 正文

[开始写作...]

---

<small style="opacity: 0.5; font-size: 0.75rem;">*HBin Zhuang* 📝</small>
`

async function createNewPost() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error('使用方法: npm run new-post "文章标题"')
    process.exit(1)
  }

  const title = args[0]
  const now = new Date()
  const date = now.toISOString().split('T')[0]

  // 生成文件名（将标题转换为 slug）
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()

  // 获取用户输入
  const description = args[1] || '描述待添加'
  const lang = args[2] || 'zh-CN'
  const tag = args[3] || 'tech'

  // 替换模板变量
  const content = BLOG_TEMPLATE.replace(/\{\{title\}\}/g, title)
    .replace(/\{\{description\}\}/g, description)
    .replace(/\{\{date\}\}/g, date)
    .replace(/\{\{lang\}\}/g, lang)
    .replace(/\{\{tag\}\}/g, tag)

  const blogDir = join(__dirname, '..', 'src', 'content', 'blog')
  const filePath = join(blogDir, `${slug}.md`)

  try {
    // 检查文件是否已存在
    await fs.access(filePath)
    console.error(`文件 ${slug}.md 已存在！`)
    process.exit(1)
  }
  catch {
    // 文件不存在，继续创建
  }

  await fs.writeFile(filePath, content, 'utf8')

  console.log(`✅ 新文章已创建: src/content/blog/${slug}.md`)
  console.log(`📝 标题: ${title}`)
  console.log(`📅 日期: ${date}`)
  console.log(`🏷️  标签: ${tag}`)
  console.log('\n💡 提示: 记得将 draft: true 改为 false 来发布文章')
}

createNewPost().catch(console.error)
