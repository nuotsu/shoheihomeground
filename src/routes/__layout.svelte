<Header/>

<main>
	<slot></slot>
</main>

<Footer/>

<script>
	import Header from '$lib/header/Header.svelte'
	import Footer from '$lib/footer/Footer.svelte'
	import '../app.css'
</script>
