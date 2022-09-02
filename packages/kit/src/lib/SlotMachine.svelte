<IntersectionObserver let:intersecting>
	<div class="grid">
		<div hidden={!intersecting}>
			{#each digits as digit, i}
				<span
					style:--step-delay="{stepDelay}s"
					style:--init-delay="{initDelay * stepDelay}s"
					style:--delay={digits.length - i}
				>
					{digit}
				</span>
			{/each}
		</div>

		<div class="opacity-0">{text}</div>
	</div>
</IntersectionObserver>

<style>
	.grid > div {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}

	span {
		display: inline-block;
		opacity: 0;
		translate: 0 0.25em;
		animation: in 0.2s ease-in-out calc((var(--init-delay) + var(--step-delay)) + (var(--delay) * var(--step-delay))) forwards;
	}

	@keyframes in {
		to {
			opacity: 1;
			translate: 0;
		}
	}
</style>

<script>
	import IntersectionObserver from '$lib/IntersectionObserver.svelte'

	export let text, stepDelay = 0.08, initDelay = 0

	const digits = String(text).split('')
</script>
