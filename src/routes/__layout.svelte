<Header/>

<main>
	<slot></slot>
</main>

<Footer/>

<script>
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import '../app.css'
</script>
