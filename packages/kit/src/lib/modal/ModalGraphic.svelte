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

			<p class="grid gap-4 mt-4">
				<a class="action" href={urlFor(image).url()} target="_blank">
					Download
				</a>

				<ShareOrCopy text="{origin + pathname}?id={_id}" />
			</p>
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

	p {
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import Date from '$lib/Date.svelte'
	import ShareOrCopy from '$lib/ShareOrCopy.svelte'
	import { urlFor } from '$utils/sanity'
	import { page } from '$app/stores'

	export let _id, image, title, description, date

	const { origin, pathname } = $page.url
</script>
