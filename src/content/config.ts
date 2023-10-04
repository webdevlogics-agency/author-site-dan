import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      author: z.string().optional(),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image().refine((img) => img.width >= 600, {
        message: 'Cover image must be at least 600 pixels wide!',
      }),
      tags: z.array(z.string()).optional(),
    }),
})

export const collections = { blog }
