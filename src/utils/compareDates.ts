import type {CollectionEntry} from 'astro:content';

export const compareByDate = (a: CollectionEntry<'companies' | 'projects'>, b: CollectionEntry<'companies' | 'projects'>) =>
  +(b.data.endDate ?? b.data.startDate) -
  +(a.data.endDate ?? a.data.startDate);
