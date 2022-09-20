import fields from '../fields'

export default {
	name: 'blog.post',
	title: 'Blog post',
	type: 'document',
	groups: [
		{ title: 'Content', name: 'content', default: true },
		{ title: 'SEO', name: 'seo' },
	],
	fields: [
		{
			name: 'title',
			type: 'text',
			rows: 2,
			group: 'content',
		},
		{
			...fields.richtext({
				styles: [
					{ title: 'H2', value: 'h2' },
					{ title: 'H3', value: 'h3' },
				],
			}),
			group: 'content',
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo',
			group: 'seo',
		},
	],
	preview: {
		select: {
			title: 'title',
			slug: 'seo.slug.current',
		},
		prepare: ({ slug, ...selection }) => ({
			subtitle: `/blog/${ slug }`,
			...selection,
		})
	},
}
