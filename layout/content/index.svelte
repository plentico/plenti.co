<script>
	export let title, intro, components, allNodes;
	import Grid from '../components/grid.svelte';
	import { loadComponent } from '../scripts/load_component.svelte';
</script>

<section id="intro">
	<h1>{@html intro.title}</h1>
	<p>{@html intro.body}</p>
	<a href="{intro.cta.link}" class="button">{intro.cta.text}</a>
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