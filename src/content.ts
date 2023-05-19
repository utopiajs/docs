import { getCollection } from 'astro:content';

export const allGuidePages = await getCollection('guide', (entry) => {
  if (import.meta.env.PUBLIC_TWO_LANG) {
    return entry;
  } else {
    return true;
  }
});
