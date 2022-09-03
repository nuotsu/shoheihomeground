{#if 'share' in navigator}
	{#await prepareShare()}
		<button class="action" disabled>
			Loading...
		</button>

	{:then data}
		<button class="action" on:click={() => navigator.share(data)}>
			Share
		</button>
	{/await}

{:else}
	<a class="action" href={url} target="_blank">
		Download
	</a>

{/if}

<style>
	.action {
		padding-block: 0.25em;
	}
</style>

<script>
	import { urlFor } from '$utils/sanity'

	export let image, name = 'shoheihomeground'

	const url = urlFor(image).height(1000).url()

	async function prepareShare() {
		let response = await fetch(url)
		let blob = await response.blob()
		let ext = blob.type.split('image/')[1]
		let file = new File([blob], `${ name }.${ ext }`, { type: blob.type })

		return { files: [file] }
	}
</script>
