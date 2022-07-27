<header bind:clientHeight>
	<nav>
		<div style:grid-area="top">
			<a href="/">Shohei Home Ground</a>
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

		@apply bg-white;
	}

	nav {
		display: grid;
		gap: 0 1rem;
	}

	@screen md {
		nav {
			grid-template-areas: 'top nav acc';
			grid-template-columns: auto 1fr auto;
		}
	}

	@screen <md {
		nav {
			grid-template-areas:
				'top toggle'
				'nav nav'
				'acc acc';
			grid-template-columns: 1fr auto;
		}

		header :global(.closed) {
			display: none;
		}
	}
</style>

<script>
	import Toggle from './Toggle.svelte'
	import HeaderNav from './HeaderNav.svelte'
	import Accounts from '$lib/Accounts.svelte'
	import { onMount } from 'svelte'

	let clientHeight

	onMount(() => {
		document.documentElement.style.setProperty('--header-height', clientHeight + 'px')
	})
</script>
