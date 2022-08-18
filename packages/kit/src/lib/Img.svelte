<img {src} {alt}
	width={w || Math.round(width / height * h) || width}
	height={h || Math.round(height / width * w) || height}
	loading="lazy"
/>

<script>
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'

	export let image, w, h, alt = ''

	const src = image.asset && urlFor(image.asset)
		.size(w, h)
		.auto('format')
		.url()

	const { width, height } = src
		? getImageDimensions(src)
		: { width: 0, height: 0 }
</script>
