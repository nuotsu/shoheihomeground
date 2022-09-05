<Marquee/>

<footer class="section grid gap-8 <md:py-0">
	<nav class="<md:flex-col">
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
		gap: 1rem 2rem;
	}
</style>

<script>
	import Marquee from '$lib/Marquee.svelte'
	import Logo from '$lib/footer/Logo.svelte'
	import Accounts from '$lib/Accounts.svelte'
	import FooterNav from './FooterNav.svelte'
</script>
