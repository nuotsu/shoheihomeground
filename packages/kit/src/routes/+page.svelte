<Head {...pg.seo} />

<Hero/>
<Marquee/>
<LatestSection/>
<CategoryList/>
<Graphics/>
<StatsAndUpdates/>
<OhtaniFunAd/>

<script>
	import Head from '$lib/Head.svelte'
	import Hero from './index/hero/Hero.svelte'
	import Marquee from '$lib/Marquee.svelte'
	import LatestSection from './index/LatestSection.svelte'
	import CategoryList from './index/CategoryList.svelte'
	import Graphics from './index/Graphics.svelte'
	import StatsAndUpdates from './index/StatsAndUpdates.svelte'
	import OhtaniFunAd from '$lib/OhtaniFunAd.svelte'

	export let data

	const { pg } = data
</script>
