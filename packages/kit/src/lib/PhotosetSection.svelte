<section class="section grid gap-4">
	<header class="md:self-start md:sticky-top prose">
		<h2 class="h2">
			<slot name="title"></slot>
		</h2>

		<ul>
			<li>{sets} photoset{#if sets !== 1}s{/if}</li>
			<li>{total} photos</li>
		</ul>
	</header>

	<div class="photos <sm:full-width">
		{#each photosets as { thumbnail, ...props }, set (props._key)}
			<Photoset {date} {category} t={thumbnail-1} {set} {...props} />
		{/each}
	</div>
</section>

<style>
	@screen md {
		section {
			grid-template-columns: minmax(300px, 1fr) 3fr;
		}
	}

	.photos {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}

	@screen <sm {
		.photos {
			@apply grid-cols-2 gap-[1px];
		}
	}
</style>

<script>
	import Photoset from './Photoset.svelte'

	export let date, category, photosets

	$: sets = photosets.length
	$: total = photosets.reduce((acc, { photos }) => acc + photos.length, 0)
</script>
