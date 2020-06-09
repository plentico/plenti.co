<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  import { makeTitle } from '../scripts/make_title.svelte';

  export let route, node, allNodes;
</script>

<html lang="en">
<Head title={makeTitle(node.filename)} />
<body>
  <Nav />
  <main>
    <svelte:component this={route} {...node.fields} {allNodes} />
    <br />
  </main>
  <Footer />
</body>
</html>

<style>
  body {
    font-family: 'NTR', sans-serif;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: var(--base-dark);
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  main {
    flex-grow: 1;
  }
</style>
