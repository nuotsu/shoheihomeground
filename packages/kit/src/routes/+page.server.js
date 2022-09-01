import client from '$utils/sanity'
import groq from 'groq'
import getStats from '$data/get-stats'

export async function load() {
	return {
		stats: await getStats(),
	}
}
