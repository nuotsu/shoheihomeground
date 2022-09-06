<header class="glass sticky top-0 z-10 hover:drop-shadow-lg transition-all" class:open={$open} bind:clientHeight>
	<nav class="relative max-w-screen-xl mx-auto grid md:gap-x-4 items-center px-4">
		<Logo/>
		<Toggle/>
		<HeaderNav/>
		<Accounts area="acc" />
	</nav>
</header>

<style>
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
			grid-template-rows: auto 1fr auto;
		}

		.open {
			position: fixed;
			inset: 0;
		}

		.open nav {
			height: 100%;
			padding-bottom: calc(env(safe-area-inset-bottom) + 1rem);
		}
	}
</style>

<script>
	import Logo from './Logo.svelte'
	import Toggle, { open } from './Toggle.svelte'
	import HeaderNav from './HeaderNav.svelte'
	import Accounts from '$lib/Accounts.svelte'
	import { onMount } from 'svelte'

	let clientHeight

	onMount(() => {
		document.documentElement.style.setProperty('--header-height', clientHeight + 'px')
	})
</script>
