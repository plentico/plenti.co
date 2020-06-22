<script>
  export let title, description, themes, os;

  import { onMount } from 'svelte/internal';

  let OSName = "";
	onMount(async () => {
    const usersOS = await navigator.appVersion;
    console.log(usersOS);
    if (usersOS.indexOf("Win")!=-1) {
      OSName="Windows";
    }
    if (usersOS.indexOf("Mac")!=-1) {
      OSName="Mac";
    }
    if (usersOS.indexOf("Linux")!=-1) {
      OSName="Linux";
    }
	});

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

  {#if os}
    <section id="download">
    {#each os as currentOs}
      <div class="os{currentOs.title == OSName ? ' primary' : ''}">
        <img src="/assets/os/{currentOs.img}" />
        {currentOs.title}
      </div>
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
  #themes img {
		box-shadow: 0 10px 36px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.06);
    max-width: 580px;
    margin: 40px 0 0 40px;
  }
  #download {
    display: flex;
  }
  .os {
    flex-grow: 1;
    margin: 0 100px;
  }
  .os:first-of-type,
  .os:last-of-type {
    margin: 0;
  }
  .os.primary {
    background-color: var(--primary);
    border-radius: 5px;
  }
</style>