<Head {title} />

<H1>{title}</H1>

{#each photos as { date, categories }}
	{@const sets = categories.reduce((a, { photosets }) => a + photosets.length, 0)}
	{@const total = getTotal(categories)}

	{#if total > 0}
		<section class="section grid gap-4">
			<header class="md:self-start md:sticky-top prose">
				<h2 class="h2">
					<a href="/{date}">
						<Date {date} />
					</a>
				</h2>

				<ul>
					<li>{sets} photoset{#if sets !== 1}s{/if}</li>
					<li>{total} photos</li>
				</ul>
			</header>

			<div class="photos <sm:full-width">
				{#each categories as { category, photosets }}
					{#each photosets as { thumbnail, ...props }, set (props._key)}
						{#if props.featured}
							<Photoset {date} {category} t={thumbnail-1} {set} {...props} />
						{/if}
					{/each}
				{/each}
			</div>
		</section>
	{/if}
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

	@screen <sm {
		.photos {
			@apply grid-cols-2 gap-[1px];
		}
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import Date from '$lib/Date.svelte'
	import Photoset from '$lib/Photoset.svelte'
	import { page } from '$app/stores'

	const title = '🌟 Featured'
	const { photos } = $page.data.sanity

	function getTotal(categories) {
		return categories
			.reduce((a, { photosets }) => a + photosets
				.filter(p => !!p.featured)
				.reduce((a, { featured, photos }) => a + photos.length, 0),
				0
			)
	}
</script>
