<header>
	<h2 class="h2">
		<slot></slot>
	</h2>

	<slot name="sub"></slot>

	{#if link?.url}
		<p>
			<a class="link with-icon" href={link.url}>
				{link.label || 'View more'}
				<Right/>
			</a>
		</p>
	{/if}
</header>

<style>
	header {
		display: flex;
		gap: 0 1rem;
		align-items: end;
	}

	p {
		margin-left: auto;
	}

	@screen <md {
		header {
			flex-wrap: wrap;
		}
	}
</style>

<script>
	import Right from '$icon/Right.svelte'

	export let link
</script>
