<dl class="relative z-[1] flex flex-wrap gap-x-12 gap-y-4 m-auto py-8 text-center justify-center text-shadow">
	<div>
		<dt class="font-bold text-7xl">{total_count.toLocaleString()}</dt>
		<dd class="h2 uppercase">photos</dd>
	</div>
	<div>
		<dt class="font-bold text-7xl">{photos.length.toLocaleString()}</dt>
		<dd class="h2 uppercase">days</dd>
	</div>
</dl>

<script>
	export let photos

	const total_count = photos
		.flatMap(p => p.categories.flatMap(c => c.photosets?.map((s => s.photos?.length)) || 0))
		.reduce((a, b) => a + b, 0)
</script>
