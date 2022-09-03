import client from '$utils/sanity'
import groq from 'groq'
import { live } from '$data/groq'

export async function load({ params }) {
	return {
		category: await client.fetch(groq`
			*[_type == 'category' && code == $category && ${ live }][0]
		`, params)
	}
}
