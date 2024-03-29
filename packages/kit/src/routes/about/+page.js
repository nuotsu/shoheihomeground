import client from '$utils/sanity'
import groq from 'groq'

export const prerender = true

export async function load() {
	return {
		pg: await client().fetch(groq`*[_type == 'page.about'][0]`)
	}
}
