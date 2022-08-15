<Head title="High Quality Photographs" />

<Hero/>
<LatestSection/>
<CategoryList/>
<Graphics/>
<StatsAndUpdates/>

<script>
	import Head from '$lib/Head.svelte'
	import Hero from '$lib/Hero.svelte'
	import LatestSection from '$lib/LatestSection.svelte'
	import CategoryList from '$lib/categories/CategoryList.svelte'
	import Graphics from '$lib/Graphics.svelte'
	import StatsAndUpdates from '$lib/stats-updates/StatsAndUpdates.svelte'
</script>

<script context="module">
	import getStats from '$data/get-stats'

	export async function load({ fetch }) {
		const { stats } = await getStats(fetch)

		return {
			stuff: {
				stats,
			}
		}
	}
</script>
