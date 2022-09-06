<a href="/">
	<picture>
		<source
			srcset={urlFor(small).url()}
			media="(max-width: 1080px)"
		/>

		<img
			src={urlFor(large).url()}
			alt="{site.title} logo"
			{...desktop}
		/>
	</picture>
</a>

<style>
	a {
		display: block;
		margin-right: auto;

		@apply <md:ml-auto;
	}

	picture :global(img) {
		max-height: 4em;
		width: auto;
		overflow: hidden;
	}

	@media (max-width: 1080px) {
		a {
			padding-block: 0.5rem;
		}

		picture :global(img) {
			max-height: 3em;
			@apply rounded-full;
		}
	}
</style>

<script>
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'
	import { page } from '$app/stores'

	const { site } = $page.data.sanity
	const { small, large } = site.logo

	const desktop = getImageDimensions(large)
</script>
