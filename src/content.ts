import { getCollection } from 'astro:content';

export const allGuidePages = await getCollection('guide', () => true);
