<script>
  export let content;
  import { makeTitle } from '../scripts/make_title.svelte';
</script>

<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>

  <title>{ content.type == '_index' ? 'Home' : makeTitle(content.filename) } | Plenti - A Static Site Generator for Svelte</title>
  {#if content.fields.meta}
    <meta name="description" content="{content.fields.meta.desc}">
    <meta name="keywords" content="{content.fields.meta.keywords}">
  {/if}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@plentico" />
  {#if content.type == "themes"}
    <meta name="twitter:title" content="{content.fields.name}" />
    <meta name="twitter:description" content="Check out the {content.fields.name} Plenti theme!">
    <meta name="twitter:image" content="https://plenti.co/media/themes/{content.fields.name.toLowerCase()}.png">
  {:else}
    <meta name="twitter:title" content="{content.fields.title}" />
    <meta name="twitter:description" content="Build more sites, manage less overhead.">
  {/if}

  <script async defer src="https://nullitics.com/script.js"></script>
  <script type="module" src="/spa/core/main.js"></script>

  <link rel="stylesheet" href="/atom.css">

  <link href="https://fonts.googleapis.com/css2?family=NTR&display=swap&family=Heebo:wght@900&family=Kalam&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

  <link rel="icon" type="image/svg+xml" href="/p.svg">
  <link rel='stylesheet' href='/global.css'>
  <link rel='stylesheet' href='/spa/bundle.css'>
</head>
