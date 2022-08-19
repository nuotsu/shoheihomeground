import client from '$utils/sanity'
import groq from 'groq'

export async function load({ params }) {
	return await client.fetch(groq`{
		'category': *[_type == 'category' && code == $category][0],

		'categories': *[_type == 'photos' && date == $date][0].categories[]{
			category->,
			photosets
		}
	}`, params)
}
