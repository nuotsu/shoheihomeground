<details class="relative" {open}
	on:mouseenter={() => open = true}
	on:mouseleave={() => open = false}
>
	<summary class="font-bold with-icon text-center">
		{#if link}
			<a href={link}>{title}</a>
		{:else}
			{title}
		{/if}

		<span class="shrink-0"><Right/></span>
	</summary>

	<div class="p-4 <md:py-0 md:glass md:chiseled-b md:text-left">
		<slot></slot>
	</div>
</details>

<style>
	summary :global(svg) {
		rotate: 90deg;
	}

	@screen md {
		div {
			position: absolute;
			left: -1rem;
			top: 100%;

			@apply min-w-max;
		}
	}

	@screen <md {
		details[open] summary {
			font-weight: bold;
		}
	}

	details[open] div {
		animation: open 0.15s ease-in-out forwards;
	}

	@keyframes open {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
	}
</style>

<script>
	import Right from '$icon/Right.svelte'

	export let title, link

	let open
</script>
