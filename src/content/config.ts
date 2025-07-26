import { defineCollection, z } from 'astro:content'

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
})

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    duration: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val: string | number | Date) =>
        new Date(val).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      ),
    draft: z.boolean().default(false).optional(),
    lang: z.string().default('en-US').optional(),
    tag: z.string().optional(),
    tags: z.array(z.string()).optional(), // 支持多标签
    category: z
      .enum(['tech', 'life', 'notes', 'talks'])
      .default('tech')
      .optional(),
    redirect: z.string().optional(),
    video: z.boolean().default(false).optional(),
    featured: z.boolean().default(false).optional(), // 精选文章
  }),
})

const note = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val: string | number | Date) =>
        new Date(val).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      ),
    lang: z.string().default('zh-CN').optional(),
    tag: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z
      .enum(['tech', 'life', 'notes', 'talks'])
      .default('tech')
      .optional(),
    featured: z.boolean().default(false).optional(),
  }),
})

export const collections = { pages, blog, note }
