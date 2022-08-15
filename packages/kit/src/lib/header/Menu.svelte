<details class="relative" {open}
	on:mouseenter={() => open = true}
	on:mouseleave={() => open = false}
>
	<summary>{title}</summary>

	<div class="p-4 <md:py-0 md:glass">
		<slot></slot>
	</div>
</details>

<style>
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
	export let title

	let open
</script>
