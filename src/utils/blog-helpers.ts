import type { CollectionPosts } from '@/types'

// 根据分类过滤文章
export function filterPostsByCategory(
  posts: CollectionPosts[],
  category?: string,
) {
  if (!category)
    return posts
  return posts.filter(post => post.data.category === category)
}

// 根据标签过滤文章
export function filterPostsByTag(posts: CollectionPosts[], tag?: string) {
  if (!tag)
    return posts
  return posts.filter(
    post => post.data.tag === tag || post.data.tags?.includes(tag),
  )
}

// 获取所有标签
export function getAllTags(posts: CollectionPosts[]) {
  const tags = new Set<string>()
  posts.forEach((post) => {
    if (post.data.tag)
      tags.add(post.data.tag)
    if (post.data.tags) {
      post.data.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
}

// 获取精选文章
export function getFeaturedPosts(posts: CollectionPosts[]) {
  return posts.filter(post => post.data.featured)
}

// 获取相关文章（基于标签）
export function getRelatedPosts(
  currentPost: CollectionPosts,
  allPosts: CollectionPosts[],
  limit = 3,
) {
  const currentTags = [
    currentPost.data.tag,
    ...(currentPost.data.tags || []),
  ].filter(Boolean)

  if (currentTags.length === 0)
    return []

  const related = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map((post) => {
      const postTags = [post.data.tag, ...(post.data.tags || [])].filter(
        Boolean,
      )

      const commonTags = currentTags.filter(tag => postTags.includes(tag))
      return { post, score: commonTags.length }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)

  return related
}

// 按年份分组文章
export function groupPostsByYear(posts: CollectionPosts[]) {
  const groups = new Map<string, CollectionPosts[]>()

  posts.forEach((post) => {
    const year = new Date(post.data.date).getFullYear().toString()
    if (!groups.has(year)) {
      groups.set(year, [])
    }
    groups.get(year)!.push(post)
  })

  return Array.from(groups.entries()).sort(([a], [b]) => Number(b) - Number(a))
}

// 生成文章阅读时间估算
export function estimateReadingTime(content: string) {
  const wordsPerMinute = 200 // 中文约 200 字/分钟
  const words = content.replace(/\s+/g, '').length // 中文字符数
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} 分钟阅读`
}
