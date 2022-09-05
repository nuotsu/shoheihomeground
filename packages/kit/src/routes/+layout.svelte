<svelte:head>
	{#if !dev}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-HCBHHJC8BK"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-HCBHHJC8BK');
		</script>
	{/if}
</svelte:head>

<Header/>

<main>
	<slot></slot>
</main>

<Footer/>

<script>
	import Header from '$lib/header/Header.svelte'
	import Footer from '$lib/footer/Footer.svelte'
	import { dev } from '$app/env'
	import '../styles/app.css'
</script>
