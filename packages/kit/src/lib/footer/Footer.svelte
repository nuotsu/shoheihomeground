<Marquee/>

<footer class="section grid gap-8">
	<nav class="<md:flex-col">
		<div class="grid gap-4 mx-auto self-start">
			<Logo/>
			<Accounts/>
		</div>

		<FooterNav/>
	</nav>

	<div class="flex flex-wrap text-sm gap-4 <md:text-center <md:justify-center">
		<p class="grow">
			Shohei Home Ground &copy; {new Date().getFullYear()}. All rights reserved.
		</p>

		<p>
			Like what you see?
			<a class="link" href="https://www.buymeacoffee.com/shoheiohtani" target="_blank">Buy me a coffee!</a>
		</p>
	</div>
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
