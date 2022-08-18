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

<script context="module">
	import client from '$utils/sanity'
	import groq from 'groq'

	export async function load() {
		return {
			stuff: {
				sanity: await client.fetch(groq`{
					'photos': *[_type == 'photos']|order(date desc){
						date,
						categories[]{
							'category': category->{ code, name },
							photosets
						}
					},
					'latestDates': *[_type == 'photos'][0...5]|order(date desc).date,
					'categories': *[_type == 'category']|order(orderRank){
						code,
						name
					},
				}`),
			}
		}
	}
</script>
