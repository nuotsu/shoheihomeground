import client from '$utils/sanity'
import groq from 'groq'

export async function load() {
	return {
		sanity: await client.fetch(groq`{
			'site': *[_type == 'site'][0],
			'photos': *[_type == 'photos' && !(_id in path('drafts.**'))]|order(date desc){
				date,
				categories[]{
					category->,
					photosets
				}
			},
			'dates': *[_type == 'photos' && !(_id in path('drafts.**'))]|order(date desc).date,
			'categories': *[_type == 'category']|order(orderRank),
			'graphics': *[_type == 'graphic']|order(date desc),
		}`),
	}
}
