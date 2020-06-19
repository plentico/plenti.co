<script>
  export let title, description, themes;
</script>

<div class="container">
  <h1>{title}</h1>

  {#if description}
  <div>
    {#each description as paragraph}
      <p>{@html paragraph}</p>
    {/each}
  </div>
  {/if}

  {#if themes}
    <section id="themes">
    {#each themes as theme}
      <img src="/assets/themes/{theme}" />
    {/each}
    </section>
  {/if}

  <p><a href="/">Back home</a></p>
</div>

<style>

  h1 {
    margin-top: 40px;
  }
  #themes {
    justify-content: center;
    display: inline-flex;
    flex-wrap: wrap;
    margin: -40px 0 0 -40px;
    width: calc(100% + 40px);
  }
  img {
		box-shadow: 0 10px 36px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.06);
    max-width: 580px;
    margin: 40px 0 0 40px;
  }
</style>