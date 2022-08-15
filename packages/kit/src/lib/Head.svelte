<svelte:head>
	<title>{title} | Shohei Home Ground</title>

	{#if description}
		<meta name="description" content={description}>
	{/if}
</svelte:head>

<script>
	export let title, description = 'High quality photographs of Shohei Ohtani taken at Angels Stadium.'
</script>
