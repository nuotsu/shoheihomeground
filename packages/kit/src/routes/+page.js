import getStats from '$data/get-stats'

export async function load({ fetch }) {
	return {
		stats: await getStats(fetch)
	}
}
