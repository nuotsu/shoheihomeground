import client from '$utils/sanity'
import groq from 'groq'

export async function load() {
	return {
		sanity: await client.fetch(groq`{
			'photos': *[_type == 'photos']|order(date desc){
				date,
				categories[]{
					category->,
					photosets
				}
			},
			'latestDates': *[_type == 'photos']|order(date desc)[0...5].date,
			'categories': *[_type == 'category']|order(orderRank),
		}`),
	}
}
