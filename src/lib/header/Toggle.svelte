<button class="md:hidden" on:click={() => $open = !$open}>
	<small>{$open ? 'Close': 'Open'}</small>
</button>

<style>
	button {
		grid-area: toggle;
	}
</style>

<script context="module">
	import { writable } from 'svelte/store'

	export const open = writable(false)
</script>
