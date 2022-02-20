<script>
  export let title, meta;
</script>

<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>

  <title>{ title } | Plenti - A Static Site Generator for Svelte</title>
  {#if meta}
    <meta name="description" content="{meta.desc}">
    <meta name="keywords" content="{meta.keywords}">
  {/if}

  <script type="module" src="/spa/ejected/main.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=NTR&display=swap&family=Heebo:wght@900&family=Kalam&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="/assets/p.svg">
  <link rel='stylesheet' href='/spa/bundle.css'>

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@plentico" />
  <meta name="twitter:title" content="{title}" />
</head>
