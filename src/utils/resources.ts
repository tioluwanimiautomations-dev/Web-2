import { getCollection, type CollectionEntry } from 'astro:content';

export type Resource = CollectionEntry<'resources'>;

/** Published resources in display order. Drafts are visible during `npm run dev` only. */
export async function getResources(): Promise<Resource[]> {
  const items = await getCollection('resources', ({ data }) => import.meta.env.DEV || !data.draft);
  return items.sort((a, b) => a.data.order - b.data.order);
}

export function statusLabel(r: Resource): string {
  return r.data.status === 'live' ? 'Free, open now' : 'Coming soon';
}
