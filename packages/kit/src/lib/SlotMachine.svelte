<IntersectionObserver let:intersecting>
	<div class="grid">
		<div hidden={!intersecting}>
			{#each digits as digit, i}
				<span class="inline-block" style:--delay={digits.length - i}>
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
		opacity: 0;
		translate: 0 0.25em;
		animation: in 0.15s ease-in-out calc(var(--delay, 0) * 0.15s) forwards;
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

	export let text

	const digits = String(text).split('')
</script>
