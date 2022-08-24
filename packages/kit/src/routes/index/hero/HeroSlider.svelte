<div class="grid pointer-events-none">
	{#each heroPhotos as image, i}
		<figure class="relative" class:active={active === i}>
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
		figure::before,
		figure::after {
			content: '';
			position: absolute;
			inset: 0;
			width: 10%;
			transform: skewX(var(--skew, -5.5deg));
			@apply bg-ink;
		}

		figure::before {
			right: auto;
			translate: -50% 0;
		}

		figure::after {
			left: auto;
			translate: 50% 0;
		}
	}

	@screen lg {
		figure { --skew: -7deg; }
	}
</style>

<script>
	import Img from '$lib/Img.svelte'
	import { page } from '$app/stores'

	const { heroPhotos } = $page.data.hero

	let active = 0

	setInterval(() => {
		active = (active + 1) % heroPhotos.length
	}, 5000)
</script>
