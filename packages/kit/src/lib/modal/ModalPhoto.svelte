<figure class="grid gap-4">
	<Img image={photo} w={1000} {alt} />

	<div class="flex flex-wrap justify-between gap-4">
		<dl>
			<dt>Category</dt>
			<dd>{category.name}</dd>

			<dt>Date</dt>
			<dd><Date {date} /></dd>

			<dt>Photoset</dt>
			<dd>{set}</dd>
		</dl>

		<p><Share image={photo} /></p>
	</div>
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
	import Share from '$lib/Share.svelte'

	export let photo, category, set, date, alt
</script>
