<section class="section">
	<header class="text-center">
		<h2 class="h1">Follow us on Instagram</h2>
		<p class="mt-2">
			<a class="action text-xl" href="https://instagram.com/shoheihomeground" target="_blank">
				@instagram
			</a>
		</p>
	</header>

	<div bind:this={elem} class="grid md:grid-cols-3 gap-4 mt-8 <lg:hidden">
		{#each instagram as post}
			<InstagramPost {...post} />
		{/each}
	</div>
</section>

<script>
	import InstagramPost from './InstagramPost.svelte'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	const { instagram } = $page.data.pg

	let elem

	onMount(() => {
		const script = document.createElement('script')
		script.src = '//www.instagram.com/embed.js'
		script.defer = true
		elem.appendChild(script)

		return () => {
			elem.removeChild(script)
		}
	})
</script>
