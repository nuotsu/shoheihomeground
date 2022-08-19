import client from '$utils/sanity'
import groq from 'groq'

export async function load({ params }) {
	return {
		photos: await client.fetch(groq`
			*[_type == 'photos' && date == $date][0]{
				date,
				categories[]{
					category->,
					photosets
				}
			}
		`, params)
	}
}
