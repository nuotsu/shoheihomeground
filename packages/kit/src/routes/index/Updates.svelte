<article class="p-4 bg-white chiseled">
	<H2>Updates</H2>

	<ul class="mt-4 max-h-[9.5em] <md:max-h-[12em] overflow-y-auto">
		{#each updates as { date, type, content, link }}
			<li>
				<a class="grid gap-x-4" href={resolveLink({ date, type, link })}>
					<time class="text-sm text-ink/40 md:leading-[1.5rem]" datetime={date}>{date}</time>

					{#if type._type == 'photos'}
						<p>Added photos for <strong><Date {date} /></strong>.</p>
					{:else if type._type == 'graphic'}
						<p>Added graphic: <strong>{type.title}</strong>.</p>
					{:else}
						<p>{content}</p>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</article>

<style>
	li + li {
		@apply mt-1 pt-1 border-t border-ink/10;
	}

	@screen md {
		a {
			grid-template-columns: 8ch 1fr;
		}
	}

	a:hover p {
		text-decoration: underline;
	}
</style>

<script>
	import H2 from '$lib/H2.svelte'
	import Date from '$lib/Date.svelte'
	import { page } from '$app/stores'

	const { updates } = $page.data.sanity

	function resolveLink({ date, type, link }) {
		return (
			type._type == 'photos' ? `/${ date }` :
			type._type == 'graphic' ? `/graphics#${ type._id }` :
			link
		)
	}
</script>
