import client from '$utils/sanity'
import groq from 'groq'
import getStats from '$data/get-stats'

export async function load() {
	return {
		...await client.fetch(groq`{
			'pg': *[_type == 'page.index'][0],
			'updates': *[_type == 'update' && !(_id in path('drafts.**'))]|order(date desc){
				...,
				type->
			},
		}`),
		stats: await getStats(),
	}
}
