{#if announcement.enabled}
	<aside class="bg-accent text-white text-center px-4">
		{#if !!announcement.url}
			<a class="link-hover" href={announcement.url}>
				{announcement.content}
			</a>
		{:else}
			{announcement.content}
		{/if}
	</aside>
{/if}

<script>
	import { page } from '$app/stores'

	const { announcement } = $page.data.sanity.site
</script>
