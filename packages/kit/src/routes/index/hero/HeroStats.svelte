<dl class="relative z-[1] m-auto py-8 text-center justify-center text-shadow">
	<dt class="font-bold text-7xl">
		<SlotMachine
			text={total_count.toLocaleString()}
			initDelay={String(photos.length.toLocaleString()).length}
		/>
	</dt>
	<dd class="h2 uppercase">photos</dd>
</dl>

<script>
	import SlotMachine from '$lib/SlotMachine.svelte'

	export let photos

	const total_count = photos
		.flatMap(p => p.categories.flatMap(c => c.photosets?.map((s => s.photos?.length)) || 0))
		.reduce((a, b) => a + b, 0)
</script>
