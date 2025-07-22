#!/usr/bin/env node

import { promises as fs } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function generateTagsPage() {
  const blogDir = join(__dirname, '..', 'src', 'content', 'blog')
  const tagsDir = join(__dirname, '..', 'src', 'pages', 'tags')

  // 确保标签页目录存在
  await fs.mkdir(tagsDir, { recursive: true })

  // 读取所有博客文件
  const blogFiles = await glob('*.md', { cwd: blogDir })
  const allTags = new Set()

  // 提取所有标签
  for (const file of blogFiles) {
    const content = await fs.readFile(join(blogDir, file), 'utf8')
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)

    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1]

      // 提取 tag 字段
      const tagMatch = frontmatter.match(/^tag:(.+)$/m)
      if (tagMatch) {
        const tag = tagMatch[1].replace(/^['"\s]+|['"\s]+$/g, '').trim()
        allTags.add(tag)
      }

      // 提取 tags 数组
      const tagsMatch = frontmatter.match(/^tags:\s*\[(.*?)\]/m)
      if (tagsMatch) {
        const tags = tagsMatch[1]
          .split(',')
          .map(t => t.trim().replace(/['"`]/g, ''))
        tags.forEach(tag => allTags.add(tag))
      }
    }
  }

  // 生成标签索引页
  const tagsIndexContent = `---
import BaseLayout from '@/layouts/BaseLayout.astro'
import { getAllTags } from '@/utils/blog-helpers'
import { getPosts } from '@/utils/posts'

const posts = await getPosts()
const tags = getAllTags(posts)
---

<BaseLayout title="标签" description="所有文章标签">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-8">标签</h1>

    <div class="flex flex-wrap gap-3">
      {tags.map(tag => (
        <a
          href={\`/tags/\${tag}\`}
          class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          #{tag}
        </a>
      ))}
    </div>
  </div>
</BaseLayout>
`

  await fs.writeFile(join(tagsDir, 'index.astro'), tagsIndexContent)

  // 为每个标签生成动态页面
  const tagDynamicPageContent = `---
import BaseLayout from '@/layouts/BaseLayout.astro'
import ListPosts from '@/components/ListPosts.vue'
import { filterPostsByTag, getAllTags } from '@/utils/blog-helpers'
import { getPosts } from '@/utils/posts'

export async function getStaticPaths() {
  const posts = await getPosts()
  const tags = getAllTags(posts)

  return tags.map(tag => ({
    params: { tag },
    props: { tag, posts: filterPostsByTag(posts, tag) }
  }))
}

const { tag, posts } = Astro.props
---

<BaseLayout title={\`标签: \${tag}\`} description={\`标签 \${tag} 下的所有文章\`}>
  <div class="max-w-4xl mx-auto">
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4">标签: #{tag}</h1>
      <p class="text-gray-600 dark:text-gray-400">共 {posts.length} 篇文章</p>
    </div>

    <ListPosts list={posts} />
  </div>
</BaseLayout>
`

  await fs.writeFile(join(tagsDir, '[tag].astro'), tagDynamicPageContent)

  console.log(`✅ 标签页面已生成`)
  console.log(`📂 标签索引: src/pages/tags/index.astro`)
  console.log(`📄 动态页面: src/pages/tags/[tag].astro`)
  console.log(`🏷️  发现标签: ${Array.from(allTags).join(', ')}`)
}

generateTagsPage().catch(console.error)
