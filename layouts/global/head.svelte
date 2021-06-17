<script>
  export let title, meta, env;
</script>

<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>

  <title>{ title } | Plenti - A Static Site Generator for Svelte</title>
  {#if meta}
    <meta name="description" content="{meta.desc}">
    <meta name="keywords" content="{meta.keywords}">
  {/if}

  <base href="{ env.local ? '/' : env.baseurl }">
  <script type="module" src="/spa/ejected/main.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=NTR&display=swap&family=Heebo:wght@900&family=Kalam&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="/assets/p.svg">
  <link rel='stylesheet' href='/spa/bundle.css'>
</head>
