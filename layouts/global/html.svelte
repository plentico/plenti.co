<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';

  export let layout, content, allContent;
</script>

<html lang="en">
  <Head {content} />
<body>
  <Nav />
  <main>
    <svelte:component this={layout} {...content.fields} {allContent} />
    <br />
  </main>
  <Footer />
  <noscript><img alt="Analytics that respects your privacy" src="https://nullitics.com/file.gif?u=plenti.co/{content.path}" /></noscript>
</body>
</html>

<style>
  body {
    font-family: 'Noto Sans', sans-serif;
    color: var(--base-dark);
    margin: 0;
  }
  main {
    margin-top: 60px;
    padding-top: 20px;
    flex-grow: 1;
  }
</style>
