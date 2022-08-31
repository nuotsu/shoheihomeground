import client from '$utils/sanity'
import groq from 'groq'
import getStats from '$data/get-stats'

export async function load({ fetch }) {
	return {
		site: await client.fetch(groq`*[_type == 'site'][0]`),
		stats: await getStats(fetch),
	}
}
