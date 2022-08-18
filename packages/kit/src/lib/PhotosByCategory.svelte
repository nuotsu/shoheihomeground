{#each categories as { category, photosets }}
	{@const sets = photosets.length}
	{@const total = '{total}'}

	<section class="section grid gap-4">
		<header class="md:self-start md:sticky-top prose">
			<h2 class="h2">{category.name}</h2>
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
