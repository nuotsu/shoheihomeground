<button
	class:open={$open}
	on:click={() => $open = !$open}
	title="Toggle menu"
/>

<style>
	button {
		grid-area: toggle;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		display: grid;
		aspect-ratio: 1;
		width: 1em;

		@apply md:hidden;
	}

	button::before,
	button::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% calc(-50% + var(--y, 0em));
		display: block;
		width: 100%;
		height: 2px;
		background-color: currentColor;
		transition: all 0.2s ease-in-out;
	}

	button:not(.open)::before { --y: -0.2em; }
	button:not(.open)::after { --y: 0.2em; }

	.open::before { rotate: 45deg; }
	.open::after { rotate: -45deg; }
</style>

<script>
	import { afterNavigate } from '$app/navigation'

	afterNavigate(() => $open = false)
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const open = writable(false)
</script>
