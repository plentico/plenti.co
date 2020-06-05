<script>
  export let title, description;
</script>

<h1>{title}</h1>

<div>
  {#each description as paragraph}
    <p>{@html paragraph}</p>
  {/each}
</div>

<p><a href="/">Back home</a></p>