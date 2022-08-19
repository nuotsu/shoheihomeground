{#each categories as { category, photosets }}
	<PhotosetSection {date} {category} {photosets}>
		<a slot="title" class="link-hover" href="/{category.code}">
			{category.name}
		</a>
	</PhotosetSection>
{/each}

<script>
	import PhotosetSection from './PhotosetSection.svelte'

	export let date, categories
</script>
