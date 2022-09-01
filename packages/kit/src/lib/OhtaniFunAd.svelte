<aside class="sectio">
	<div class="bg-ink dots moving">
		<a class="block max-w-screen-md <md:max-w-md mx-auto chiseled highlight" href={ad.url} target="_blank">
			<picture>
				<source srcset={urlFor(ad.imgMobile).auto('format').url()} media="(max-width: 768px)" />
				<img class="block" src={urlFor(ad.imgDesktop).auto('format').url()} alt={ad.title}>
			</picture>
		</a>
	</div>
</aside>

<script>
	import { page } from '$app/stores'
	import { urlFor } from '$utils/sanity'

	const { ad } = $page.data.sanity.site
</script>
