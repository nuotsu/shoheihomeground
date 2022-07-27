<header bind:clientHeight>
	<nav>
		<a href="/">Shohei Home Ground</a>

		<HeaderNav/>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;

		@apply bg-white;
	}

	nav {
		display: flex;
		gap: 1rem;
	}
</style>

<script>
	import HeaderNav from './HeaderNav.svelte'
	import { onMount } from 'svelte'

	let clientHeight

	onMount(() => {
		document.documentElement.style.setProperty('--header-height', clientHeight + 'px')
	})
</script>
