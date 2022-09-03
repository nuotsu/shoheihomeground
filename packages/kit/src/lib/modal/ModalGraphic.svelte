<div class="root">
	<figure>
		<div>
			<Img {image} w={1000} />
		</div>

		<figcaption class="grid gap-2 mt-4">
			<h2 class="h2">{title}</h2>

			{#if description}
				<p>{description}</p>
			{/if}

			{#if date}
				<p class="text-sm"><Date {date} /></p>
			{/if}

			<p><Share {image} /></p>
		</figcaption>
	</figure>
</div>

<style>
	.root {
		max-width: 600px;
	}

	figure :global(img) {
		max-height: 80vh;
		min-height: 250px;
		width: auto;
		margin: auto;

		@apply shadow-xl;
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import Date from '$lib/Date.svelte'
	import Share from '$lib/Share.svelte'

	export let image, title, description, date
</script>
