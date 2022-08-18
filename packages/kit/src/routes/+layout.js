import client from '$utils/sanity'
import groq from 'groq'

/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		sanity: await client.fetch(groq`{
			'photos': *[_type == 'photos']|order(date desc){
				date,
				categories[]{
					'category': category->{ code, name },
					photosets
				}
			},
			'latestDates': *[_type == 'photos'][0...5]|order(date desc).date,
			'categories': *[_type == 'category']|order(orderRank){
				code,
				name
			},
		}`),
	}
}
