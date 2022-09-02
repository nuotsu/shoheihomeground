<section id="categories" class="bg-ink text-white dots moving">
	<div class="section">
		<H2>Catgories</H2>

		<ul class="grid gap-4 grid-cols-2 md:grid-cols-3 <md:gap-2 mt-4">
			{#each categories as { code, name, jpn }}
				<li>
					<a class="!flex flex-wrap <sm:flex-col items-center gap-x-4 chiseled" href="/{code}">
						<span class="<sm:grow">{name}</span>
						<hr class="grow">
						<span class="text-sm">{jpn}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	a {
		display: block;
		padding: 1rem;

		@apply text-xl bg-white/10 hover:bg-white/20;
	}

	hr {
		border: 0;
		border-bottom: 1px solid;
		opacity: 0.2;

		@apply <sm:hidden;
	}
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import { page } from '$app/stores'

	const { categories } = $page.data.sanity
</script>
