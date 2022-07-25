<Hero/>
<StatsAndUpdates/>
<Latest/>
<CategoryList/>

<script>
	import Hero from '$lib/Hero.svelte'
	import StatsAndUpdates from '$lib/stats-updates/StatsAndUpdates.svelte'
	import Latest from '$lib/Latest.svelte'
	import CategoryList from '$lib/categories/CategoryList.svelte'
</script>

<script context="module">
	import getStats from '../data/get-stats'

	export async function load({ fetch }) {
		const { stats } = await getStats(fetch)

		return {
			stuff: {
				stats,
			}
		}
	}
</script>
