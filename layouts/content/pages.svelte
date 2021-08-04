<script>
  export let title, description, themes, os, upcoming_themes, allContent;

  import Linux from '../components/linux.svelte';
  import Mac from '../components/mac.svelte';
  import Windows from '../components/windows.svelte';

  import { onMount } from 'svelte/internal';

  let OSName = "";
  let version = "";
	onMount(async () => {
    const usersOS = await navigator.appVersion;
    if (usersOS.indexOf("Win")!=-1) {
      OSName="Windows";
    }
    if (usersOS.indexOf("Mac")!=-1) {
      OSName="Mac";
    }
    if (usersOS.indexOf("Linux")!=-1 || usersOS.indexOf("5.0 (X11)")!=-1) {
      OSName="Linux";
    }

    // Get latest release version.
    try {
      let response = await fetch("https://api.github.com/repos/plentico/plenti/releases", {
        mode: "cors",
        headers: {
          "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
        }
      });
      if (response.ok) {
        let json = await response.json();
        version = json[0].name.substr(1);
      }  else {
        alert("HTTP-Error: " + response.status);
      }
    } catch(err) {
      console.log(err); // Failed to fetch
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
      {#each allContent.filter(content => content.type == "themes") as theme}
        <a href="/themes/{theme.fields.name.toLowerCase()}"><img src="/assets/themes/{theme.fields.name.toLowerCase()}.png" /></a> 
      {/each}
    </section>
  {/if}

  {#if upcoming_themes}
    <div class="upcoming-themes">(More themes coming soon)</div>
    <section id="themes">
    {#each upcoming_themes as theme}
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
        {:else if currentOs.title == 'Windows'}
          <Windows />
        {:else}
          <strong>We can't determine what Operating System you're on.</strong>
        {/if}
        <div class="os-name">{currentOs.title}</div>
      </div>
    {/each}
    </section>
    <section id="detection">
      {#if OSName == 'Linux' || OSName == 'Mac'}
        <div class="selected">It looks like you're using a {OSName} computer.</div>
        <div class="instructions">If that's not the case, choose a different Operating System above.</div>
        <a class="cta" href="https://github.com/plentico/plenti/releases/download/v{version}/plenti_{version}_{OSName}_64-bit.tar.gz">Download<br><strong>version {version}</strong><br>for 64-bit {OSName}</a>
        <div>(<a href="https://github.com/plentico/plenti/releases/latest">See more options</a>)</div>
      {:else if OSName == 'Windows'}
        <div class="selected">It looks like you're using a {OSName} computer.</div>
        <div class="selected"><strong>Unfortunately Windows is not currently supported.</div>
        <div class="selected"> If you'd like to help add Windows support, please see more details <a href="https://github.com/plentico/plenti/issues/45" target="blank" rel="noopener noreferrer">here</a>.<strong></div>
      {:else}
        <div class="selected"><a href="https://github.com/plentico/plenti/releases/latest">See the latest releases</a></div>
        <div class="instructions">Or use one of the package managers below...</div>
      {/if}
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
        <strong>Or you can install using Scoop (Currently not supported):</strong><br><br>
        <codeblock>
          scoop bucket add org https://github.com/plentico/scoop-plenti.git
          <br>scoop install plentico/scoop-plenti
        </codeblock>
      {:else}
        <strong>Install using Snap:</strong><br><br>
        <codeblock>
          sudo snap install plenti
        </codeblock>
        <strong>Install using Homebrew:</strong><br><br>
        <codeblock>
          brew tap plentico/homebrew-plenti
          <br>brew install plenti
        </codeblock>
        <strong>Install using Scoop:</strong><br><br>
        <codeblock>
          scoop bucket add org https://github.com/plentico/scoop-plenti.git
          <br>scoop install plentico/scoop-plenti
        </codeblock>
      {/if}
    </section>
  {/if}

</div>

<style>

  h1 {
    margin-top: 40px;
    line-height: 1;
  }
  .upcoming-themes {
    font-size: 2rem;
    margin: 40px;
    text-align: center;
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
  .cta {
    background-image: linear-gradient(to right,var(--accent) , var(--accent-dark));
    color: var(--base-lightest);
    padding: 50px 100px;
    margin: 50px 0 25px;
    display: inline-block;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 30px;
    text-align: center;
    font-size: 2rem;
    line-height: 3rem;
  }
  a {color: var(--primary);}
  @media (max-width: 999px) {
    .os {
      margin: 0;
    }
  }
  @media (max-width: 699px) {
    #download {
      flex-direction: column;
    }
    .os, .instructions {
      display: none;
    }
    .os.primary {
      display: block;
    }
  }
</style>
