<section class="section grid gap-4">
	<header class="md:self-start md:sticky-top">
		<h2 class="h2"><slot name="title">{categories[category]}</slot></h2>
	</header>

	<ul>
		{#each sortedPhotosets as photoset}
			{#if !!photosets[photoset]}
				<li>
					<a class="link" href="/{date}/{category}/{photoset}">
						Photoset {photoset} ({photosets[photoset].images.length} photos)
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style>
	@screen md {
		section {
			grid-template-columns: minmax(300px, 1fr) 3fr;
		}
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}
</style>

<script>
	import categories from '$lib/categories'

	export let date, category, photosets

	let sortedPhotosets = Object.keys(photosets).sort()
</script>
