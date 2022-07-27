<footer>
	<nav>
		<div>
			<a href="/">Shohei Home Ground</a>

			<Accounts/>
		</div>

		<FooterNav/>
	</nav>

	<p>Shohei Home Ground &copy; {new Date().getFullYear()}. All rights reserved.</p>
</footer>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	p {
		text-align: center;
	}
</style>

<script>
	import Accounts from '$lib/Accounts.svelte'
	import FooterNav from './FooterNav.svelte'
</script>
