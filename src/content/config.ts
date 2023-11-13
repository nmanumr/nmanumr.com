import {z, defineCollection, reference} from 'astro:content';

const companiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    startDate: z.coerce.string().datetime(),
    endDate: z.coerce.string().datetime().optional(),
    sortOrder: z.number(),
    title: z.string(),
    name: z.string(),
    url: z.string().url(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    startDate: z.coerce.string().datetime(),
    endDate: z.coerce.string().datetime().optional(),
    sortOrder: z.number(),
    company: reference('companies'),
    title: z.string(),
    team: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'companies': companiesCollection,
};
