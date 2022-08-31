<aside class="bg-ink/10">
	<div class="section max-w-screen-md <md:max-w-md">
		<a class="highlight" href={ad.url} target="_blank">
			<picture class="chiseled">
				<source srcset={urlFor(ad.imgMobile).auto('format').url()} media="(max-width: 768px)" />
				<img class="block" src={urlFor(ad.imgDesktop).auto('format').url()} alt={ad.title}>
			</picture>
		</a>
	</div>
</aside>

<script>
	import { page } from '$app/stores'
	import { urlFor } from '$utils/sanity'

	const { ad } = $page.data.site
</script>
