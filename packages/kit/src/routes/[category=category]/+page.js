import client from '$utils/sanity'
import groq from 'groq'

export async function load({ params }) {
	return {
		category: await client.fetch(groq`
			*[_type == 'category' && code == $category][0]
		`, params)
	}
}
