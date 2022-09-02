<figure class="grid gap-4">
	<Img image={photo} w={1000} {alt} />

	<dl>
		<dt>Category</dt>
		<dd>{category.name}</dd>

		<dt>Date</dt>
		<dd><Date {date} /></dd>

		<dt>Photoset</dt>
		<dd>{set}</dd>
	</dl>
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
		margin: 0 auto;
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
	import Date, { format } from '$lib/Date.svelte'

	export let photo, category, set, date, alt
</script>
