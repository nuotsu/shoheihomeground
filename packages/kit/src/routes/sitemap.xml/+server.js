import client from '$utils/sanity'
import groq from 'groq'
import { toXML } from 'jstoxml'

const BASE = 'https://shoheihomeground.com'

export async function GET() {
	const data = await client().fetch(groq`{
		'categories': *[_type == 'category'].code,
		'dates': *[_type == 'photos']{
			date,
			categories[]{
				category->,
				photosets
			}
		},
	}`)

	const pages = [
		page('/', 1.0),
		page('/browse', 0.9),
		page('/graphics', 0.9),
		page('/latest', 0.9),
		page('/about', 0.9),

		data.categories.map(c => page(`/${ c }`, 0.8)).join('\n'),

		data.dates.map(d => page(`/${ d.date }`, 0.8)).join('\n'),

		data.dates.map(d =>
			d.categories.map(({ category }) =>
				page(`/${ d.date }/${ category.code }`, 0.7)
			).join('\n')
		).join('\n'),

		data.dates.map(d =>
			d.categories.map(({ category, photosets }) =>
				photosets.map((p, i) =>
					page(`/${ d.date }/${ category.code }/${ String(i+1).padStart(2, '0') }`, 0.6)
				).join('\n')
			).join('\n')
		).join('\n'),
	].join('\n')

	return new Response(
		'<?xml version="1.0" encoding="UTF-8"?>' +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${pages}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	)
}

const page = (path, priority, { ...props } = {}) => toXML({
	url: {
		loc: BASE + path,
		priority,
		changefreq: 'weekly',
		...props
	}
})
