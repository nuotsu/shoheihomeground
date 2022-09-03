<Marquee/>

<footer class="section grid gap-8">
	<nav>
		<div class="grid gap-4 mx-auto self-start">
			<Logo/>
			<Accounts/>
		</div>

		<FooterNav/>
	</nav>

	<p class="text-center">
		<small>Shohei Home Ground &copy; {new Date().getFullYear()}. All rights reserved.</small>
	</p>
</footer>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>

<script>
	import Marquee from '$lib/Marquee.svelte'
	import Logo from '$lib/Logo.svelte'
	import Accounts from '$lib/Accounts.svelte'
	import FooterNav from './FooterNav.svelte'
</script>
