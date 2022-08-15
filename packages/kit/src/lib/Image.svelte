<img
	class={className}
	src={cdn(public_id, transform)}
	{...size} {alt} {loading} {draggable}
/>

<script>
	export let public_id, width, height, aspect_ratio
	export let alt = '', loading = 'lazy', draggable = null, className
	export let w = null, h = null, t = null

	let both = !!w && !!h

	let size = {
		width: both ? w : !!h ? h * aspect_ratio : (w || width),
		height: both ? h : !!w ? w / aspect_ratio : (h || height),
	}

	let transform = [
		w && `w_${w}`,
		h && `h_${h}`,
		both && 'c_fill',
		t,
		'f_auto'
	].filter(Boolean).join(',')
</script>

<style>
	img {
		@apply bg-ink/5;
	}
</style>

<script context="module">
	import { PUBLIC_CLOUDINARY_NAME } from '$env/static/public'

	export function cdn(public_id, transform) {
		return `https://res.cloudinary.com/${ PUBLIC_CLOUDINARY_NAME }/${[transform, public_id].filter(Boolean).join('/')}`
	}
</script>
