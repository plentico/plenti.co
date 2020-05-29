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
    <div class="container">
      <svelte:component this={route} {...node.fields} {allNodes} />
      <br />
    </div>
  </main>
  <Footer {allNodes} />
</body>
</html>

<style>
  body {
    font-family: 'NTR', sans-serif;
    font-size: 1.25rem;
    line-height: 1rem;
    color: var(--base-dark);
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  main {
    flex-grow: 1;
  }
  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    flex-grow: 1;
    padding: 0 20px;
  }
  :global(:root) {
    --primary: rgb(34, 166, 237);
    --primary-dark: rgb(16, 92, 133);
    --accent: rgb(254, 211, 48);
    --accent-dark: rgb(254, 139, 48);
    --base-lightest: white;
    --base: rgb(245, 245, 245);
    --base-dark: rgb(17, 17, 17);
  }
  :global(main a) {
    position: relative;
    text-decoration: none;
    color: var(--base-dark);
    padding-bottom: 5px;
  }
  :global(.button) {
    background-image: linear-gradient(to right,var(--accent) , var(--accent-dark));
    color: var(--base-lightest);
    padding: 10px;
    border-radius: 5px;
  }
  :global(.text-primary) {
    color: var(--primary);
  }
  :global(.text-accent-dark) {
    color: var(--accent-dark);
  }
</style>
