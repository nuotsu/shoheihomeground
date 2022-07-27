<header bind:clientHeight>
	<nav>
		<div><a href="/">Shohei Home Ground</a></div>

		<HeaderNav/>

		<Accounts/>
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
			grid-template-columns: auto 1fr auto;
		}
	}
</style>

<script>
	import HeaderNav from './HeaderNav.svelte'
	import Accounts from '$lib/Accounts.svelte'
	import { onMount } from 'svelte'

	let clientHeight

	onMount(() => {
		document.documentElement.style.setProperty('--header-height', clientHeight + 'px')
	})
</script>
