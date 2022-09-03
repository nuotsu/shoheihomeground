<figure class="grid gap-4">
	<Img image={photo} w={800} />

	<div class="flex flex-wrap justify-between gap-4">
		<dl>
			<dt>Category</dt>
			<dd>{category.name}</dd>

			<dt>Date</dt>
			<dd><Date {date} /></dd>

			<dt>Photoset</dt>
			<dd>{set}</dd>
		</dl>
	</div>

	<p class="grid gap-4">
		<a class="action" href={urlFor(photo).url()} target="_blank">
			Download
		</a>

		<ShareOrCopy text="{$page.url.href}?key={photo._key}" />
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
		grid-template-columns: auto 1fr;
		gap: 0 0.5em;
		max-width: max-content;
	}

	dt {
		text-align: right;
	}

	dd {
		font-weight: bold;
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import Date from '$lib/Date.svelte'
	import { urlFor } from '$utils/sanity'
	import ShareOrCopy from '$lib/ShareOrCopy.svelte'
	import { page } from '$app/stores'

	export let photo, category, set, date
</script>
