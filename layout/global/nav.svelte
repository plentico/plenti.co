<nav>
  <div class="container">
    <span id="brand"><a href="/"><img alt="planarian" src="/assets/planarian.svg" />Plenti</a></span>
    <a class="nav-link" href="/docs">Docs</a>
    <a class="nav-link" href="/themes">Themes</a>
    <a class="nav-link button" href="/download">Download</a>
  </div>
</nav>

<style>
  nav, .container, #brand, #brand a {
    display: flex;
  }
  nav {
    min-height: 60px;
    box-shadow: 0px 2px 3px var(--base);
  }
  #brand {
    flex: 1;
    font-weight: bold;
    font-size: 1.75rem;
    letter-spacing: 1px;
  }
  a {
    align-self: center;
    align-items: center;
    color: var(--base-dark);
    text-decoration: none;
  }
  img {
    margin-right: 10px;
  }
  .nav-link {
    margin-left: 10px;
  }
</style>
