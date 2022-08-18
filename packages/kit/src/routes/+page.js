import getStats from '$data/get-stats'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	return {
		stats: await getStats(fetch)
	}
}
