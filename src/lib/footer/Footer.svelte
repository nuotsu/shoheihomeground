<footer>
	<nav>
		<div>
			<Logo/>
			<Accounts/>
		</div>

		<FooterNav/>
	</nav>

	<p>
		<small>Shohei Home Ground &copy; {new Date().getFullYear()}. All rights reserved.</small>
	</p>
</footer>

<style>
	footer {
		display: grid;
		gap: 1rem;
		padding: 1rem;
	}

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
	import Logo from '$lib/Logo.svelte'
	import Accounts from '$lib/Accounts.svelte'
	import FooterNav from './FooterNav.svelte'
</script>
