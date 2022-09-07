<li>
	<a class="grid gap-x-4" href={resolveLink({ date, type, link })}>
		<time class="text-sm text-ink/40 leading-[1.5rem] text-center" datetime={date}>
			{format(date, { month: 'numeric', day: 'numeric' })}
		</time>

		{#if type?._type == 'photos'}
			<p>Added photos for <strong class="inline-block"><Date {date} /></strong>.</p>
		{:else if type?._type == 'graphic'}
			<p>Added graphic: <strong>{type.title}</strong>.</p>
		{:else}
			<p>{content}</p>
		{/if}
	</a>
</li>

<style>
	li + :global(li) {
		@apply mt-1 pt-1 border-t border-ink/10;
	}

	a {
		grid-template-columns: 2.5ch 1fr;
	}

	a[href]:hover p {
		text-decoration: underline;
	}
</style>

<script>
	import Date, { format } from '$lib/Date.svelte'

	export let date, type, content, link

	function resolveLink({ date, type, link }) {
		return (
			type?._type == 'photos' ? `/${ date }` :
			type?._type == 'graphic' ? `/graphics#${ type._id }` :
			link
		)
	}
</script>
