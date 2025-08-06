import type { CollectionPosts, PostKey } from '@/types'
import { getCollection } from 'astro:content'

export function sortPostsByDate(
  itemA: CollectionPosts,
  itemB: CollectionPosts,
) {
  // Handle both 'date' and 'pubDate' fields
  const dateA = (itemA.data as any).date || (itemA.data as any).pubDate
  const dateB = (itemB.data as any).date || (itemB.data as any).pubDate
  
  return (
    new Date(dateB).getTime() - new Date(dateA).getTime()
  )
}

export async function getPosts(path?: string, collection?: PostKey) {
  // 根据路径自动确定集合类型
  if (!collection) {
    if (path === 'notes') {
      collection = 'note'
    } else if (path === 'talks') {
      collection = 'talks'
    } else {
      collection = 'blog'
    }
  }

  return (
    await getCollection(collection, (post) => {
      // For talks collection, we don't filter by slug since the path 'talks' won't be in the slug
      if (collection === 'talks') {
        return import.meta.env.PROD ? post.data.draft !== true : true
      }
      
      return (
        (import.meta.env.PROD ? post.data.draft !== true : true)
        && (path && path !== 'notes' ? post.slug.includes(path) : true)
      )
    })
  ).sort(sortPostsByDate)
}
