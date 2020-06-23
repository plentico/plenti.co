<script>
  export let title, description, themes, os;

  import Linux from '../components/linux.svelte';
  import Mac from '../components/mac.svelte';
  import Windows from '../components/windows.svelte';

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
    if (usersOS.indexOf("Linux")!=-1 || usersOS.indexOf("5.0 (X11)")!=-1) {
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
      <div class="os{currentOs.title == OSName ? ' primary' : ''}" on:click="{() => OSName = currentOs.title}">
        {#if currentOs.title == 'Linux'}
          <Linux />
        {:else if currentOs.title == 'Mac'}
          <Mac />
        {:else}
          <Windows />
        {/if}
        <div class="os-name">{currentOs.title}</div>
      </div>
    {/each}
    </section>
    <section id="detection">
      <div class="selected">It looks like you're using a {OSName} computer.</div>
      <div class="instructions">If that's not the case, choose a different Operating System above.</div>
    </section>
    <section id="instructions">
      {#if OSName == 'Linux'}
        <strong>Or you can install using Snap:</strong><br><br>
        <codeblock>
          sudo snap install plenti
        </codeblock>
      {:else if OSName == 'Mac'}
        <strong>Or you can install using Homebrew:</strong><br><br>
        <codeblock>
          brew tap plentico/homebrew-plenti
          <br>brew install plenti
        </codeblock>
      {:else if OSName == 'Windows'}
        <strong>Or you can install using Scoop:</strong><br><br>
        <codeblock>
          scoop bucket add org https://github.com/plentico/scoop-plenti.git
          <br>scoop install plentico/scoop-plenti
        </codeblock>
      {:else}
        <div>Please select one of the Operating Systems above.</div>
      {/if}
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
    flex-basis: 0;
    margin: 0 100px;
    padding: 50px 50px 100px 50px;
    position: relative;
  }
  .os:first-of-type,
  .os:last-of-type {
    margin: 0;
  }
  .os.primary {
    background-color: var(--primary-light);
    border-radius: 5px;
  }
  .os-name {
    position: absolute;
    bottom: 35px;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
    left: 0;
  }
  .os:hover {
    cursor: pointer;
  }
  .os:hover :global(g),
  .os:hover :global(polygon),
  .os:hover :global(path),
  .os:hover .os-name {
    fill: var(--primary-light);
    color: var(--primary-light);
  }
  .os:hover.primary :global(g),
  .os:hover.primary :global(polygon),
  .os:hover.primary :global(path),
  .os:hover.primary .os-name {
    fill: var(--base-dark);
    color: var(--base-dark);
  }
  #detection {
    padding: 80px 0;
    text-align: center;
  }
  #detection .selected {
    font-size: 2rem;
    line-height: 2rem;
  }
</style>