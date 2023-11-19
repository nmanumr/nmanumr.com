import type {CollectionEntry} from 'astro:content';

export const compareByDate = (a: CollectionEntry<'companies' | 'projects'>, b: CollectionEntry<'companies' | 'projects'>) => {
  if (!b.data.endDate && !a.data.endDate) {
    return +b.data.startDate - +a.data.startDate;
  }

  if (!b.data.endDate) {
    return 1;
  }

  if (!a.data.endDate) {
    return -1;
  }

  return +b.data.endDate - +a.data.endDate;
}

