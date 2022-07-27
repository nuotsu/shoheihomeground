<button on:click={() => $open = !$open}>
	{$open ? 'Close': 'Open'}
</button>

<style>
	button {
		grid-area: toggle;
	}

	@screen md {
		button {
			display: none;
		}
	}
</style>

<script context="module">
	import { writable } from 'svelte/store'

	export const open = writable(false)
</script>
