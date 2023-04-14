<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  import Login from './login.svelte';

  export let layout, content, allContent, user;
</script>

<html lang="en">
  <Head {content} />
  <body>
    {#if user && $user.isAuthenticated}
      <svelte:component this={$user.menu} bind:content {user} />
    {/if}
    <Login {user} />
    <main>
      <Nav />
      <svelte:component this={layout} {...content.fields} {allContent} {user} />
      <br />
      <Footer />
    </main>
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
  :global(nav~main > nav) {
    top: 40px !important;
  }
</style>
