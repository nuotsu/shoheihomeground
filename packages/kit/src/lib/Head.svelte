<svelte:head>
	<title>{title} | {site.title}</title>

	{#if description}
		<meta name="description" content={description}>
	{/if}

	{#if site.ogimage}
		<meta property="og:image" content={urlFor(site.ogimage).url()} data-gatsby-head="true">
	{/if}
</svelte:head>

<script>
	import { page } from '$app/stores'
	import { urlFor } from '$utils/sanity'

	export let title, description = 'High quality photographs of Shohei Ohtani taken at Angels Stadium.'

	const { site } = $page.data.sanity
</script>
