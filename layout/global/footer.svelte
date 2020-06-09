<script>
  import { makeTitle } from '../scripts/make_title.svelte';
</script>

<footer>
  <div class="container">
    <section id="plentico">
      <strong>Plentico</strong>
      <div><a href="/about">About</a></div>
      <div><a href="/contact">Contact</a></div>
    </section>
    <section id="products">
      <strong>Products</strong>
      <div><a href="/plenti">Plenti</a></div>
      <div><a href="https://plentiform.com">Plentiform</a></div>
    </section>
    <section id="resources">
      <strong>Resources</strong>
      <div><a href="/docs">Documentation</a></div>
      <div><a href="/themes">Themes</a></div>
    </section>
    <section id="copyright">
      <div id="social"><a href="https://twitter.com/jantcutech"><img src="/assets/twitter.svg"></a><a href="https://youtube.com/jantcu"><img src="/assets/youtube.svg"></a><a href="https://github.com/plentico/plenti"><img src="/assets/github.svg"></a></div>
      <div id="copyright">© Plentico 2020</div>
      <a href="https://jantcu.com">By Jantcu LLC</a>
    </section>
  </div>
</footer>

<style>
  footer {
    min-height: 200px;
    display: flex;
    align-items: center;
    background-color: var(--primary-lightest);
    border-top: 1px solid var(--primary-lighter);
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 50px 0;
  }
  footer > div {
    display: flex;
    flex: 100%;
  }
  section {
    flex: 0 0 25%
  }
  strong {
    display: inline-block;
    border-bottom: 2px solid;
    padding-bottom: 5px;
    margin-bottom: 15px;
  }
  a {
    color: var(--base-dark);
    text-decoration: none;
    margin: 5px 0;
    display: inline-block;
  }
  #social a {
    margin: 0 10px 10px 0;
  }
</style>
