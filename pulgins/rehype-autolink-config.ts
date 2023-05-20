import { h } from 'hastscript';

import type { Options } from 'rehype-autolink-headings';


/**
 * Configuration for the `rehype-autolink-headings` plugin.
 * This set-up was informed by https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
 */
export const autolinkConfig: Options = {
	properties: { class: 'header-anchor' },
	behavior: 'after',
	group: ({ tagName }) => h('div', { tabIndex: -1, class: `heading-wrapper level-${tagName}` }),
};
