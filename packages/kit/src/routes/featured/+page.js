import client from '$utils/sanity'
import groq from 'groq'

export async function load() {
	return {
		featured: await client('v1').fetch(groq`
			*[_type == 'photos' && categories[].photosets[].featured]|order(date desc){
				date,
				categories[count(photosets[featured]) > 0]{
					category->,
					photosets[featured]
				}
			}
		`)
	}
}
