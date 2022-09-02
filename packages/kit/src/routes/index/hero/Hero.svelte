<section class="bg-ink text-white dots moving overflow-hidden">
	<div class="max-w-screen-xl mx-auto grid items-center">
		<HeroCopy/>
		<HeroStats {photos} />
		<HeroSlider/>
	</div>
</section>

<style>
	@screen md {
		div {
			grid-template-columns: 0.8fr 0.2fr 1fr;
		}

		div > :global(:nth-child(1)) { grid-column: 1 / span 2; }
		div > :global(:nth-child(2)) { grid-column: 3 / span 2; }
		div > :global(:nth-child(3)) { grid-column: 2 / span 2; }

		div > :global(*) { grid-row: 1 / -1; }
	}

	@screen <md {
		div {
			grid-template-rows: repeat(2, auto);
		}

		div > :global(:nth-child(1)) { grid-row: 1 / span 1; }
		div > :global(:nth-child(2)),
		div > :global(:nth-child(3)) { grid-row: 2 / span 1; }

		div > :global(*) { grid-column: 1 / -1; }
	}
</style>

<script>
	import HeroCopy from './HeroCopy.svelte'
	import HeroSlider from './HeroSlider.svelte'
	import HeroStats from './HeroStats.svelte'
	import { page } from '$app/stores'

	export let pg

	const { photos } = $page.data.sanity
</script>
