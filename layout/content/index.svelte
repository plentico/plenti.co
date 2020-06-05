<script>
	export let intro, editor, features, allNodes;
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
			<img src="/assets/edit.gif" alt="Animation of typing on a computer" />
		</div>
		<div class="editor-content">
			<h3>{editor.title}</h3>
			<p contenteditable="true">{editor.body}</p>
		</div>
	</div>
</section>

<section id="features">
	{#each features as feature}
		<div class="feature">
			<img src="{feature.img}" alt="{feature.title}" />
			<div class="title">{feature.title}</div>
		</div>
	{/each}
</section>

<div>
	<h3>Recent blog posts:</h3>
	<Grid items={allNodes} filter="blog" />
	<br />
</div>

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
	#features {
		background-image: url("/assets/deep-water.svg");
		background-size: cover;
		display: flex;
		flex-wrap: wrap;
		padding: 100px 0;
	}
	.feature {
		flex: 0 0 33.333333%;
		text-align: center;
		align-self: center;
		margin: 40px 0;
	}
	.feature .title {
		font-weight: bold;
		color: var(--base-lightest);
		font-size: 2rem;
		margin: 20px 0;
	}
</style>