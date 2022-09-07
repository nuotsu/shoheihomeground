<svelte:head>
	<!-- {#if !dev} -->
		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-MH9ZR87');</script>
		<!-- End Google Tag Manager -->
	<!-- {/if} -->
</svelte:head>

<Announcement/>
<Header/>

<main>
	<slot></slot>
</main>

<Footer/>

<script>
	import Announcement from '$lib/header/Announcement.svelte'
	import Header from '$lib/header/Header.svelte'
	import Footer from '$lib/footer/Footer.svelte'
	// import { dev } from '$app/env'
	import '../styles/app.css'
</script>
