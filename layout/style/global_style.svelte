<style>
  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    flex-grow: 1;
    padding: 0 20px;
  }
  :global(:root) {
    --primary-lightest: rgb(235, 249, 255);
    --primary-lighter: rgb(171, 226, 255);
    --primary-light: rgb(68, 175, 232);
    --primary: rgb(34, 166, 237);
    --primary-dark: rgb(16, 92, 133);
    --accent: rgb(254, 211, 48);
    --accent-dark: rgb(254, 139, 48);
    --base-lightest: white;
    --base-lighter: rgb(249, 249, 249);
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
  :global(code) {
    font-size: 1rem;
    color: var(--accent-dark);
    background-color: var(--base-light);
    padding: 5px;
    font-family: monospace;
    font-weight: bold;
  }
  :global(codeblock) {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid var(--accent-dark);
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }
</style>