<Head {title} />

<H1>{title}</H1>

<TOC>
	{#each imagesByDate as [date]}
		<li><a class="hover:underline" href="#{date}"><Date {date} /></a></li>
	{/each}
</TOC>

{#each imagesByDate as [date, photosets]}
	<CategorySection id={date} {date} {category} {photosets}>
		<time slot="title" datetime={date}>{format_v1(date)}</time>
	</CategorySection>
{/each}

<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import TOC from '$lib/TOC.svelte'
	import Date, { format_v1 } from '$lib/Date.svelte'
	import categories from '$lib/categories'
	import CategorySection from '$lib/categories/CategorySection.svelte'

	export let category, imagesByDate

	let title = categories[category]
</script>
