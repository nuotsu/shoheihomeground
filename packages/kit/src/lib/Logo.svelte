<a class="inline-block h-[3em] {className}" href="/">
	{#if icon}
		<img
			src="/logo-icon.png"
			alt="Shohei Home Ground logo"
			width="240" height="240"
		/>

	{:else}
		<img
			src="/logo.png"
			alt="Shohei Home Ground logo"
			width="600" height="130"
		/>
	{/if}
</a>

<style>
	img {
		width: auto;
		height: 100%;
	}
</style>

<script>
	export let icon, className
</script>
