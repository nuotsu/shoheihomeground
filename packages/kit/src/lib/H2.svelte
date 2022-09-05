<header class="flex flex-wrap items-end gap-x-4">
	<h2 class="h2">
		<slot></slot>
	</h2>

	<slot name="sub"></slot>

	{#if link?.url}
		<p class="ml-auto">
			<a class="link with-icon" href={link.url}>
				{link.label || 'View more'}
				<Right/>
			</a>
		</p>
	{/if}
</header>

<script>
	import Right from '$icon/Right.svelte'

	export let link
</script>
