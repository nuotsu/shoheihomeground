<div class="grid pointer-events-none">
	{#each heroPhotos as image, i}
		<figure class="<md:chiseled text-[25vw]" class:active={active === i}>
			<Img {image} w={1000} h={800} />
		</figure>
	{/each}
</div>

<style>
	div {
		align-self: stretch;
	}

	figure {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		transition: all 0.5s ease-in-out;
	}

	figure:not(.active) {
		opacity: 0;
		translate: -1rem 0;
	}

	figure :global(img) {
		height: 100%;
		object-fit: cover;
	}

	@screen md {
		figure {
			clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
		}
	}

	@screen lg {
		figure { --skew: -7deg; }
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import { page } from '$app/stores'

	const { heroPhotos } = $page.data.pg

	let active = 0

	setInterval(() => {
		active = (active + 1) % heroPhotos.length
	}, 5000)
</script>
