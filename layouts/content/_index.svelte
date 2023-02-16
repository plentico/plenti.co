<script>
	export let intro, editor, features, setup, cta;
	import Waves from '../components/waves.svelte';
	import { onMount } from 'svelte';
	export let by=0;

	let totalPhrases = intro.phrases.length;
	let phrase = intro.phrases[0];
	let typedChars = phrase;
	let charIndex = 0;
	let phraseIndex = 0;
	let typewriter;
	let reverse;

	const typeChar = () => {
		if (typedChars === phrase) {
			clearInterval(typewriter);
			setTimeout(typing, 5000);
			reverse = true;
			charIndex = 0;
		}
		if (typedChars.length === 0) {
			reverse = false;
			phraseIndex < totalPhrases ? phraseIndex += 1 : phraseIndex = 0;
			phrase = intro.phrases[phraseIndex];
		}
		if (reverse) {
			if (typedChars === phrase) {
				setTimeout(() => {
					typedChars = typedChars.slice(0, -1);
				}, 5000);
			} else {
				typedChars = typedChars.slice(0, -1);
			}
		} else {
			typedChars += phrase[charIndex];
			charIndex += 1;
		}
	}
	const typing = () => typewriter = setInterval(typeChar, 50);

	onMount(async () => {
		typing();
	});
</script>

<div class="container">
	<section id="intro">
		<div id="intro-text">
		<h1>
			<div>{intro.title}</div>
			<div>
				<span class='text-accent-dark'>{typedChars}</span>{#if typedChars === phrase}.{/if}<span id="cursor"></span>
			</div>
		</h1>
		<p>{@html intro.body}</p>
		{#each intro.cta as cta}
			<a href="{cta.link}" class="button">{cta.text}</a>
		{/each}
		</div>
		<div id="intro-hero">
			<img src="{intro.image.src}" alt="{intro.image.alt}" />
		</div>
	</section>
</div>

<Waves />

<section id="editor">
	<div class="container">
		<div class="editor-graphic">
			<img src="{editor.image.src}" alt="{editor.image.alt}" />
		</div>
		<div class="editor-content">
			<h3>{editor.title}</h3>
			<p contenteditable="true">{editor.body}</p>
		</div>
	</div>
</section>

<svelte:window bind:scrollY={by}/>
<section
	id="features"
	style="background-image: url('{features.background}'); background-position-y:{by/5 - 300}px;">
	{#each features.items as feature}
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
					<strong><span class="accent">{item.title_accent}</span> <span class="title">{item.title}</span></strong>
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
		display: flex;
		padding: 60px 0;
	}
	#intro-text {
		font-size: 1.5rem;
		line-height: 3rem;
	}
	h1 {
		font-size: 3rem;
	}
	#cursor {
		display: inline-block;
		background-color: var(--primary);
		background-color: rgb(233 233 233);
		margin: 0 5px -5px;
		width: 6px;
		height: 45px;
		-webkit-animation: blink 1000ms steps(1, end) infinite;
		animation: blink 1000ms steps(1, end) infinite;
	}
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
	#intro-hero {
		align-self: center;
	}
	a.button {
		font-size: 1.25rem;
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
		font-size: 1.5rem;
		line-height: 3rem;
	}
	#editor h3 {
		font-size: 2.25rem;
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
		font-family: 'NTR', sans-serif;
		font-weight: bold;
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
		margin: 100px 0;
	}
	#setup .item:first-of-type {
		margin-top: 0;
	}
	#setup .item:nth-child(odd) {
		flex-direction: row-reverse;
	}
	#setup .item > div {
		flex-basis: 0;
    	flex-grow: 1;
	}
	#setup strong span.accent {
		font-family: 'Kalam', cursive;
		color: var(--accent-dark);
	}
	#setup strong span.title {
		font-family: 'NTR', sans-serif;
	}
	#setup p {
		font-size: 1.5rem;
	}
	#setup img {
		box-shadow: 0 10px 36px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.06);
    	transform: rotate(-3deg);
	}
	#setup .img {
		align-items: center;
	}
	#setup .item:nth-child(even) .img {
		display: flex;
    	justify-content: flex-end;
	}
	#setup .item:nth-child(even) img {
    	transform: rotate(3deg);
	}
	#cta-wrapper {
		text-align: center;
		margin-bottom: 50px;
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
		font-family: 'NTR', sans-serif;
		font-weight: bold;
		font-size: 1.5rem;
	}
	@media (max-width: 999px) {
		img {
			max-width: 100%;
		}
		#intro {
			flex-direction: column;
			padding: 0;
		}
		#intro-hero {
			padding-top: 50px;
		}
		#editor .container {
			flex-direction: column;
			padding: 20px;
		}
		.editor-graphic {
			text-align: center;
		}
		.feature {
			flex: 0 0 50%;
		}
		#setup {
			padding: 40px 0;
		}
		#setup .item,
		#setup .item:nth-child(odd) {
			flex-direction: column;
			margin: 60px 0;
		}
		#setup .item p {
			margin: 0 0 20px 0;
		}
		#setup .item:nth-child(even) img,
		#setup .item:nth-child(odd) img {
			transform: rotate(0deg);
		}
		#setup .item .img,
		#setup .item:nth-child(even) .img {
			text-align: center;
			justify-content: center;
		}
	}
	@media (max-width: 599px) {
		#cta {
			padding: 0 0 40px;
		}
		.feature {
			flex: 0 0 100%;
		}
	}
</style>