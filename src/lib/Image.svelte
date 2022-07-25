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

<script context="module">
	export function cdn(public_id, transform) {
		return `https://res.cloudinary.com/ryofuj/${[transform, public_id].filter(Boolean).join('/')}`
	}
</script>
