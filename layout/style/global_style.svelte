<style>
  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    flex-grow: 1;
    padding: 0 20px;
  }
  :global(:root) {
    --primary-light: rgb(68, 175, 232);
    --primary: rgb(34, 166, 237);
    --primary-dark: rgb(16, 92, 133);
    --accent: rgb(254, 211, 48);
    --accent-dark: rgb(254, 139, 48);
    --base-lightest: white;
    --base-light: rgb(245, 245, 245);
    --base: rgb(212, 212, 212);
    --base-dark: rgb(60, 60, 60);
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
  :global(h1, h2, h3) {
    font-family: 'Heebo', sans-serif;
  }
</style>