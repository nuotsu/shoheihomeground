<details {open}
	on:mouseenter={() => open = true}
	on:mouseleave={() => open = false}
>
	<summary>{title}</summary>

	<div>
		<slot></slot>
	</div>
</details>

<style>
	details {
		position: relative;
	}

	div {
		padding: 1rem;
	}

@screen md {
	div {
		position: absolute;
		left: -1rem;
		top: 100%;

		@apply min-w-max bg-white;
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
