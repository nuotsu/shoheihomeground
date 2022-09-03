{#if 'share' in navigator}
	<button class="action" on:click={() => navigator.share({ url: text })}>
		Share link
	</button>

{:else}
	<button class="action" on:click={() => navigator.clipboard.writeText(text)}>
		Copy link
	</button>

{/if}

<script>
	export let text
</script>
