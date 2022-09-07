import client from '$utils/sanity'
import groq from 'groq'
import { live } from '$data/groq'

export async function load() {
	return {
		sanity: await client().fetch(groq`{
			'site': *[_type == 'site' && ${ live }][0],
			'photos': *[_type == 'photos' && ${ live }]|order(date desc){
				date,
				categories[]{
					category->,
					photosets
				}
			},
			'dates': *[_type == 'photos' && ${ live }]|order(date desc).date,
			'categories': *[_type == 'category' && ${ live }]|order(orderRank),
			'graphics': *[_type == 'graphic']|order(date desc),
		}`),
	}
}
