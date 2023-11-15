import {z, defineCollection, reference} from 'astro:content';

const companiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    logo: z.string(),
    title: z.string(),
    name: z.string(),
    url: z.string().url(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    startDate: z.date(),
    endDate: z.date().optional(),
    company: reference('companies').optional(),
    title: z.string(),
    team: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'companies': companiesCollection,
};
