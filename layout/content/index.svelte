<script>
	export let intro, editor, features, setup, cta, allNodes;
	import Grid from '../components/grid.svelte';
	import Waves from '../components/waves.svelte';
	import { loadComponent } from '../scripts/load_component.svelte';
	export let by=0;
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

<svelte:window bind:scrollY={by}/>
<section id="features" style="background-position-y:{by/5 - 300}px;">
	{#each features as feature}
		<div class="feature">
			<img src="{feature.img}" alt="{feature.title}" />
			<div class="title">{feature.title}</div>
		</div>
	{/each}
</section>

<section id="setup">
	<div class="container">
		<h3>Minimal Setup Required</h3>
		{#each setup as item}
			<div class="item">
				<div class="content">
					<strong><span>{item.title_accent}</span>&nbsp;{item.title}</strong>
					<p>{item.body}</p>
				</div>
				<div class="img">
					<img src="{item.img}" />
				</div>
			</div>
		{/each}
	</div>
</section>

<section id="cta-wrapper">
	<div class="container">
		<div id="cta">
			<h3>{cta.title}</h3>
			<a href="{cta.link.url}">{cta.link.text}</a>
		</div>
	</div>
</section>

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
	#setup {
		font-size: 2rem;
		line-height: 3rem;
		padding: 100px 0;
	}
	#setup .item {
		display: flex;
	}
	#setup .item:nth-child(odd) {
		flex-direction: row-reverse;
	}
	#setup .item > div {
		flex-basis: 0;
    	flex-grow: 1;
	}
	#setup strong span {
		font-family: 'Kalam', cursive;
		color: var(--accent-dark);
	}
	#cta-wrapper {
		text-align: center;
	}
	#cta {
		background-image: linear-gradient(to right,var(--accent) , var(--accent-dark));
		color: var(--base-lightest);
		padding: 50px 100px 100px;
		display: inline-block;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 30px;
		text-align: center;
		font-size: 2rem;
		line-height: 3rem;
	}
	#cta a {
		background-color: var(--base-lightest);
		color: var(--accent-dark);
		padding: 0 20px;
		border-radius: 5px;
		font-weight: bold;
		font-size: 1.5rem;
	}
</style>