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

	@screen md {
		div {
			position: absolute;
			left: 0;
			top: 100%;

			@apply min-w-max bg-white;
		}
	}
</style>

<script>
	export let title

	let open
</script>
