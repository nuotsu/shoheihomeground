<img {src} {alt}
	width={w || Math.round(width / height * h) || width}
	height={h || Math.round(height / width * w) || height}
	{loading}
/>

<style>
	img {
		font-size: 0;
	}
</style>

<script>
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'

	export let image, w, h, alt = '', loading = 'lazy'

	const src = image.asset && urlFor(image.asset)
		.size(w, h)
		.auto('format')
		.url()

	const { width, height } = src
		? getImageDimensions(src)
		: { width: 0, height: 0 }
</script>
