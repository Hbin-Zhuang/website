import { defineCollection, z } from 'astro:content'

// 共享的 schema 字段
const sharedFields = {
  // 基础字段
  title: z.string(),
  description: z.string().optional(),
  
  // 图片字段
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
}

// 日期转换器
const dateTransformer = z
  .string()
  .or(z.date())
  .transform((val: string | number | Date) =>
    new Date(val).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  )

// 文章分类
const categoryEnum = z
  .enum(['tech', 'life', 'notes', 'talks'])
  .default('tech')
  .optional()

// 文章通用字段
const postFields = {
  ...sharedFields,
  draft: z.boolean().default(false).optional(),
  tag: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false).optional(),
}

// Pages 集合 - 最简单的结构
const pages = defineCollection({
  schema: z.object(sharedFields),
})

// Blog 集合 - 包含所有功能
const blog = defineCollection({
  schema: z.object({
    ...postFields,
    date: dateTransformer,
    duration: z.string().optional(),
    lang: z.string().default('en-US').optional(),
    category: categoryEnum,
    redirect: z.string().optional(),
    video: z.boolean().default(false).optional(),
  }),
})

// Note 集合 - 默认中文，其他与 blog 类似但更简洁
const note = defineCollection({
  schema: z.object({
    ...postFields,
    date: dateTransformer,
    lang: z.string().default('zh-CN').optional(),
    category: categoryEnum,
  }),
})

// Talks 集合 - 演讲相关的特定字段
const talks = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(), // 注意：talks 的 description 是必需的
    pubDate: dateTransformer, // 使用相同的日期转换器
    tags: z.array(z.string()), // 注意：talks 的 tags 是必需的
    draft: z.boolean().default(false).optional(),
    // Talks 特有字段
    event: z.string(),
    location: z.string(),
    videoUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
  }),
})

export const collections = { pages, blog, note, talks }
