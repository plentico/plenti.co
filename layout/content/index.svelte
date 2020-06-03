<script>
	export let intro, editor, components, allNodes;
	import Grid from '../components/grid.svelte';
	import Waves from '../components/waves.svelte';
	import { loadComponent } from '../scripts/load_component.svelte';
</script>

<div class="container">
	<section id="intro">
		<h1>{@html intro.title}</h1>
		<p>{@html intro.body}</p>
		{#each intro.cta as cta}
			<a href="{cta.link}" class="button">{cta.text}</a>
		{/each}
	</section>
</div>

<Waves />

<section id="editor">
	<div class="container">
		<div class="editor-graphic">
			<img src="/assets/edit_animation.gif" />
		</div>
		<div class="editor-content">
			<h3>{editor.title}</h3>
			<p contenteditable="true">{editor.body}</p>
		</div>
	</div>
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
	a.button {
		font-size: 1.5rem;
    	display: inline-block;
    	height: 40px;
		margin-right: 20px;
	}
	a.button:last-of-type {
		background-image: none;
    	color: var(--base-dark);
    	border: 1px solid var(--base);
	}
	#editor {
		background-image: linear-gradient(var(--primary-light), var(--primary));
		color: var(--base-lightest);
		font-size: 2rem;
		line-height: 3rem;
	}
	#editor > div {
		display: flex;
		padding: 100px 0;
	}
	.editor-graphic,
	.editor-content {
		flex-basis: 0;
		flex-grow: 1;
	}
	img {
		max-width: 385px;
	}
</style>