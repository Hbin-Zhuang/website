import type { CollectionPosts, PostKey } from '@/types'
import { getCollection } from 'astro:content'

export function sortPostsByDate(
  itemA: CollectionPosts,
  itemB: CollectionPosts,
) {
  return (
    new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime()
  )
}

export async function getPosts(path?: string, collection?: PostKey) {
  // 根据路径自动确定集合类型
  if (!collection) {
    if (path === 'notes') {
      collection = 'note'
    } else {
      collection = 'blog'
    }
  }

  return (
    await getCollection(collection, (post) => {
      return (
        (import.meta.env.PROD ? post.data.draft !== true : true)
        && (path && path !== 'notes' ? post.slug.includes(path) : true)
      )
    })
  ).sort(sortPostsByDate)
}
