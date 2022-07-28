<header class="glass hover:drop-shadow-lg transition-all" bind:clientHeight>
	<nav class="max-w-screen-xl mx-auto">
		<div style:grid-area="top">
			<Logo/>
		</div>

		<Toggle/>
		<HeaderNav/>
		<Accounts area="acc" />
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 1;
	}

	nav {
		display: grid;
		gap: 0 1rem;
		padding: 1rem;
	}

	@screen md {
		nav {
			grid-template-areas: 'top nav acc';
			grid-template-columns: auto 1fr auto;
		}
	}

	@screen <md {
		header :global(.closed) {
			display: none;
		}

		nav {
			grid-template-areas:
				'top toggle'
				'nav nav'
				'acc acc';
			grid-template-columns: 1fr auto;
		}
	}
</style>

<script>
	import Logo from '$lib/Logo.svelte'
	import Toggle from './Toggle.svelte'
	import HeaderNav from './HeaderNav.svelte'
	import Accounts from '$lib/Accounts.svelte'
	import { onMount } from 'svelte'

	let clientHeight

	onMount(() => {
		document.documentElement.style.setProperty('--header-height', clientHeight + 'px')
	})
</script>
