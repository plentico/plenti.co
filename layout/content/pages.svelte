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
    {#each themes as theme}
      <img src="/assets/themes/{theme}" />
    {/each}
  {/if}

  <p><a href="/">Back home</a></p>
</div>

<style>

  h1 {
    margin-top: 40px;
  }
  img {
		box-shadow: 0 10px 36px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.06);
  }
</style>