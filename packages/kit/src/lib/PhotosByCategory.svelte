<!-- TODO: sort by category -->
{#each categories as { category, photosets }}
	{@const sets = photosets.length}
	{@const total = photosets.reduce((acc, { photos }) => acc + photos.length, 0)}

	<section class="section grid gap-4">
		<header class="md:self-start md:sticky-top prose">
			<h2 class="h2">
				<a href="/{date}/{category.code}">{category.name}</a>
			</h2>
			<ul>
				<li>{sets} photoset{#if sets !== 1}s{/if}</li>
				<li>{total} photos</li>
			</ul>
		</header>

		<div class="photos">
			{#each photosets as { photos, thumbnail }, set}
				<Photoset {date} {photos} t={thumbnail-1} {category} {set} />
			{/each}
		</div>
	</section>
{/each}

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
</style>

<script>
	import Photoset from './Photoset.svelte'

	export let date, categories
</script>
