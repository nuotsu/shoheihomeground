<Head title={format_v1(date)} />

<H1>
	<Date {date} />
	<p slot="sub">{#if isLatest}Latest{/if}</p>
</H1>

<TOC>
	{#each imagesByCategory as [category]}
		<li><a class="hover:underline" href="#{category}">{categories[category]}</a></li>
	{/each}
</TOC>

{#each imagesByCategory as [category, photosets]}
	<CategorySection id={category} {date} {category} {photosets} />
{/each}

<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Head from '$lib/Head.svelte'
	import H1 from '$lib/H1.svelte'
	import TOC from '$lib/TOC.svelte'
	import categories from '$lib/categories'
	import Date, { format_v1 } from '$lib/Date.svelte'
	import CategorySection from '$lib/categories/CategorySection.svelte'

	export let date, imagesByCategory

	$: isLatest = Object.keys(byDate)[0] === date
</script>
