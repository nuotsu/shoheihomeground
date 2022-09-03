<figure class="grid gap-4">
	<Img image={photo} w={800} />

	<dl>
		<dt>Category</dt>
		<dd>{category.name}</dd>

		<dt>Date</dt>
		<dd><Date {date} /></dd>

		<dt>Photoset</dt>
		<dd>{set}</dd>
	</dl>

	<p class="grid gap-4">
		<a class="action" href={urlFor(photo).url()} target="_blank">
			Download
		</a>

		<ShareOrCopy text="{origin + pathname}?key={photo._key}" />
	</p>
</figure>

<style>
	figure :global(img) {
		max-height: 80vh;
		min-height: 250px;
		width: auto;
		margin: auto;

		@apply shadow-xl;
	}

	dl {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0 1rem;
		max-width: max-content;
		margin-inline: auto;
	}

	dt { text-align: right; }

	dd { font-weight: bold; }

	p {
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import Date from '$lib/Date.svelte'
	import { urlFor } from '$utils/sanity'
	import ShareOrCopy from '$lib/ShareOrCopy.svelte'
	import { page } from '$app/stores'

	export let photo, category, set, date

	const { origin, pathname } = $page.url
</script>
