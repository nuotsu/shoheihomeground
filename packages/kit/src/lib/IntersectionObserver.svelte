<span bind:this={elem}>
	<slot {intersecting}></slot>
</span>

<script>
	import { onMount } from 'svelte'

	export let once = false

	let elem
	let intersecting = false

	onMount(() => {
		if (typeof IntersectionObserver === 'undefined') return

		const observer = new IntersectionObserver(entries => {
			intersecting = entries[0].isIntersecting

			if (intersecting && once) {
				observer.unobserve(elem)
			}
		}, {
			rootMargin: '0px 0px 0px 0px'
		})

		observer.observe(elem)

		return () => observer.unobserve(elem)
	})
</script>
