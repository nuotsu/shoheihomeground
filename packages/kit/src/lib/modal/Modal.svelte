<svelte:window on:keyup={onKeyup} />

{#if $open}
	<div
		class="fixed inset-0 z-10 bg-ink/50 overlay"
		on:click={() => $open = false}
		transition:fade
	/>

	<aside class="glass" transition:fly={{ x: 100 }}>
		<p class="sticky top-0">
			<button on:click={() => $open = false}>
				&times;
			</button>
		</p>

		<slot></slot>
	</aside>
{/if}

<style>
	aside {
		position: fixed;
		inset: 0 0 0 auto;
		z-index: 10;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		max-width: calc(100vw - 2rem);
		max-height: 100vh;
		overflow-y: auto;
		overscroll-behavior: contain;
		box-shadow: -1rem 0 1rem #0001;
	}

	aside::before,
	aside::after {
		content: '';
		margin: auto;
	}

	button {
		position: absolute;
		inset: 0 auto auto 0;
		translate: -100% -100%;
		display: grid;
		place-content: center;
		width: 1em;
		height: 1em;

		@apply text-3xl;
	}

	button:not(:hover) {
		opacity: 0.4;
	}
</style>

<script>
	import { fade, fly } from 'svelte/transition'

	function onKeyup({ key }) {
		if ($open && key === 'Escape') $open = false
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const open = writable(false)
</script>
