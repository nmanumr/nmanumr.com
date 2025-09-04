import { z, defineCollection, reference } from "astro:content";
import { glob, file } from 'astro/loaders';

const companiesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/companies" }),
  schema: z.object({
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    logo: z.string(),
    title: z.string(),
    draft: z.boolean().optional(),
    name: z.string(),
    url: z.string().url(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    startDate: z.date(),
    endDate: z.date().optional(),
    draft: z.boolean().optional(),
    company: reference("companies").optional(),
    featured: z.boolean().optional(),
    title: z.string(),
    team: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  companies: companiesCollection,
};
