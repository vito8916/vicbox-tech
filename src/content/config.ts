import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // Transform string to Date object
        author: z.enum(["Victor Alvarado", "Fernanda Herrera"]),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        heroImage: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        thumb: z
            .object({
                src: z.string(),
                alt: z.string(),
            })
            .optional(),
        description: z
            .string()
            .max(
                160,
                "For best SEO results, please keep the description under 160 characters."
            ),
        category: z.enum(["CSS", "Yii2", "Astro", "General"]),
    }),
});

const snippetsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
    }),
});

export const collections = {
    'blog': blogCollection,
    'snippets': snippetsCollection,
};
