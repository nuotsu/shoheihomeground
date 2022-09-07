<Head {...pg.seo} />

<H1>{pg.title}</H1>

<ContactForm/>
<FeaturedVideos/>
<InstagramFeed/>
<OhtaniFunAd/>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import ContactForm from './ContactForm.svelte'
	import FeaturedVideos from './FeaturedVideos.svelte'
	import InstagramFeed from './InstagramFeed.svelte'
	import OhtaniFunAd from '$lib/OhtaniFunAd.svelte'

	export let data

	const { pg } = data
</script>
