<Head {...pg.seo} />

<H1>{pg.title}</H1>

<section class="section">
	videos: {pg.videos.length}
</section>

<OhtaniFunAd/>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import OhtaniFunAd from '$lib/OhtaniFunAd.svelte'

	export let data

	const { pg } = data
</script>
