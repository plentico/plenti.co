<script>
	export let title, intro, components, allNodes;
	import Grid from '../components/grid.svelte';
	import { loadComponent } from '../scripts/load_component.svelte';
</script>

<section id="intro">
	<h1>{@html intro.title}</h1>
	<p>{@html intro.body}</p>
	{#each intro.cta as cta}
		<a href="{cta.link}" class="button">{cta.text}</a>
	{/each}
</section>

<div>
	<h3>Recent blog posts:</h3>
	<Grid items={allNodes} filter="blog" />
	<br />
</div>

{#if components}
	{#each components as { component, fields }}
		{#await loadComponent(component)}
			loading component...
		{:then compClass}
			<svelte:component this="{compClass}" {...fields} />
		{:catch error}
			{console.log(error.message)}
		{/await}
	{/each}
{/if}

<style>
	#intro {
		max-width: 50%;
		font-size: 2rem;
		line-height: 3rem;
	}
</style>