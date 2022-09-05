<div>
	<a href="/">
		<picture>
			<source
				srcset={urlFor(small).url()}
				media="(max-width: 767px)"
			/>

			<img
				src={urlFor(large).url()}
				alt="{site.title} logo"
				{...desktop}
			/>
		</picture>
	</a>
</div>

<style>
	div {
		grid-area: top;
		display: grid;
		place-content: center;

		@apply <md:text-center;
	}

	a {
		display: block;
	}

	picture :global(img) {
		max-height: 4em;
		width: auto;
		overflow: hidden;

		@apply <md:rounded-full <md:max-h-[3em];
	}
</style>

<script>
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'
	import { page } from '$app/stores'

	console.log($page.data.sanity.site)

	const { site } = $page.data.sanity
	const { small, large } = site.logo

	const desktop = getImageDimensions(large)
</script>
