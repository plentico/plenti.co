<script>
  let checked=false;
  const uncheck = () => {
    checked=false;
  }
</script>
<nav>
  <div class="container">
    <span id="brand"><a href="/"><img alt="planarian" src="/assets/planarian.svg" />Plenti</a></span>
    <input type="checkbox" id="toggle" class="hidden" bind:checked={checked}>
    <label for="toggle" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div id="menu">
      <a on:click={uncheck} class="nav-link" href="/docs">Docs</a>
      <a on:click={uncheck} class="nav-link" href="/themes">Themes</a>
      <a on:click={uncheck} class="nav-link" href="https://github.com/sponsors/plentico">Donate</a>
      <a on:click={uncheck} class="nav-link button" href="/download">Download</a>
      <a class="nav-link" href="https://github.com/plentico/plenti"><img src="/assets/social/github.svg" /></a>
    </div>
  </div>
</nav>

<style>
  nav, .container, #brand, #brand a {
    display: flex;
  }
  nav {
    min-height: 60px;
    box-shadow: 0px 2px 3px var(--base-light);
  }
  #brand {
    flex: 1;
    font-size: 1.75rem;
    letter-spacing: 1px;
  }
  #menu {
    display: flex;
  }
  a {
    align-self: center;
    align-items: center;
    color: var(--base-dark);
    text-decoration: none;
  }
  a.nav-link.button {
    color: var(--base-lightest);
    font-weight: bold;
  }
  img {
    margin-right: 10px;
  }
  .nav-link {
    margin-left: 10px;
  }
  .hidden {
    display: none;
  }
  #hamburger {
    display: none;
    width: 35px;
    height: 30px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    align-self: center;
  }
  #hamburger span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background-image: linear-gradient(to right,var(--accent),var(--accent-dark));
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  #hamburger span:nth-child(2),
  #hamburger span:nth-child(3) {
    top: 12px;
  }
  #hamburger span:nth-child(4) {
    top: 24px;
  }
  #toggle:checked~#hamburger span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  #toggle:checked~#hamburger span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  #toggle:checked~#hamburger span:nth-child(1),
  #toggle:checked~#hamburger span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
  @media (max-width: 600px) {
    #hamburger {
      display: block;
    }
    #menu {
      position: absolute;
      top: 62px;
      left: 0;
      width: 100%;
      background: var(--base-lightest);
      flex-direction: column;
      z-index: 1;
      max-height: 0;
      overflow: hidden;
      max-height: 0;
      box-shadow: 0 5px 6px -4px rgba(0,0,0,.2);
      -webkit-transition: max-height .4s ease-in-out;
      -moz-transition: max-height .4s ease-in-out;
      -o-transition: max-height .4s ease-in-out;
      transition: max-height .4s ease-in-out;
    }
    #toggle:checked~#menu {
      max-height: 300px;
    }
    #menu a {
      padding: 10px;
    }
  }
</style>
