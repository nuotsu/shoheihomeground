{#if !!image?.asset}
	<a class="highlight" href="/{date}/{category.code}/{num(set)}">
		<figure>
			<Img {image} w={200} h={200} />

			<figcaption class="glass">
				<Date {date} options={{ month: 'short', day: 'numeric' }} />
				—
				{category.name}

				{#if featured}
					&starf;
				{/if}
			</figcaption>
		</figure>
	</a>
{/if}

<style>
	a {
		overflow: hidden;
	}

	a:hover figcaption {
		translate: -0.5em 0;
		opacity: 0;
	}

	figure {
		position: relative;
	}

	figcaption {
		position: absolute;
		left: 0;
		bottom: 1ch;
		padding: 0.25em 1em 0.25em 0.5em;
		font-size: 0.6rem;
		transition:
			translate 0.2s ease-in-out,
			opacity 0.2s ease-in-out;

		@apply rounded-r-sm;
	}
</style>

<script>
	import Date from '$lib/Date.svelte'

	import Img from '$lib/Img.svelte'
	import { num } from '$lib/Set.svelte'

	export let date, category, photos, thumbnail, set, featured

	const image = photos[thumbnail-1]
</script>
