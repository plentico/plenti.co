<script>
    export let title, sections, deprecated, allContent;
    import DocsNav from "../components/docs_nav.svelte";
    let checked=false;
    const uncheck = () => {
        checked=false;
    }
</script>

<div class="docs-wrapper">
    <input type="checkbox" id="nav-toggle" class="hidden" bind:checked={checked}>
    <DocsNav allContent={allContent} bind:checked />
    <div class="docs-container">
        <div id="hamburger-wrapper">
            <label for="nav-toggle" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
        {#if checked}
            <div class="sidebar-overlay" on:click={uncheck}></div>
        {/if}
        <div class="docs">
            {#if deprecated}
                <div id="deprecated">{@html deprecated}</div>
            {/if}
            <h1>{title}</h1>

            {#each sections as section}
                <strong class="title">{section.title}</strong>
                {#each section.body as paragraph}
                    <p class="section-body">
                        {#if paragraph.p}
                            {#each paragraph.p as line}
                                {#if line.slice(-1) !== ">"}
                                  {@html line}&nbsp;
                                {:else}
                                  {@html line}
                                {/if}
                            {/each}
                        {/if}
                        {#if paragraph.t}
                            <table>
                                <thead>
                                    <tr>
                                    {#each paragraph.t.head as th}
                                        <th>{@html th}</th>
                                    {/each}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {#each paragraph.t.data as tr}
                                    <tr>
                                        {#each tr as td}
                                            <td>{@html td}</td>
                                        {/each}
                                    </tr>
                                    {/each}
                                </tbody>
                            </table>
                        {/if}
                    </p>
                {/each}
            {/each}
        </div>

    </div>
</div>

<style>
    .docs-wrapper,
    .docs-container {
        display: flex;
    }
    .docs-container {
        min-height: 100vh;
        padding: 0 20px;
    }
    #deprecated {
        border: 1px solid var(--accent);
        padding: 20px;
        margin-top: 20px;
    }
    #deprecated ~ h1,
    #deprecated ~ div,
    #deprecated ~ strong,
    #deprecated ~ p,
    #deprecated ~ p :global(a),
    #deprecated ~ p :global(code) {
        color: gainsboro;
    }
    .section-body :global(a),
    #deprecated :global(a) {
        font-weight: bold;
        color: var(--primary);
    }
    h1 {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 300;
        font-size: 2rem;
    }
    .section-body :global(table) {
        width: 100%;
        text-align: left;
    }
    .title {
        font-weight: 300;
        font-size: 1.5rem;
    }
    p {
        line-height: 1.75rem;
    }
    .hidden {
        display: none;
    }
    #hamburger {
        display: none;
        width: 35px;
        height: 30px;
        margin-top: 20px;
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
        height: 3px;
        border-radius: 5px;
        width: 100%;
        background-color: var(--base-dark);
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
    #nav-toggle:checked~.docs-container #hamburger span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    #nav-toggle:checked~.docs-container #hamburger span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    #nav-toggle:checked~.docs-container #hamburger span:nth-child(1),
    #nav-toggle:checked~.docs-container #hamburger span:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
    }
    #nav-toggle:checked~.docs-container #hamburger-wrapper {
        position: fixed;
        top: 0;
        left: 240px;
        z-index: 2;
    }
    #nav-toggle:checked~.docs-container #hamburger-wrapper span {
        background-color: white;
    }
    @media (max-width: 600px) {
        #hamburger {
            display: block;
        }
        .docs-wrapper {
            padding: 0 20px;
        }
        .docs-wrapper :global(.sidebar) {
            overflow: initial;
            margin-top: 0;
            top: 0;
            left: 0;
            position: fixed;
            max-height: 100%;
            background-color: var(--base-lightest);
            padding: 25px;
            z-index: 2;
            -webkit-transition: margin-left .4s ease-in-out;
            -moz-transition: margin-left .4s ease-in-out;
            -o-transition: margin-left .4s ease-in-out;
            transition: margin-left .4s ease-in-out;
            margin-left: -240px;
            overflow-y: scroll;
        }
        .docs-container {
            flex-direction: column;
        }
        #nav-toggle:checked~:global(.sidebar) {
            margin-left: 0;
        }
        .sidebar-overlay {
            background: rgba(54, 25, 25, .5);
            height: 100%;
            width: 100%;
            left: 0;
            top: -60px;
            position: absolute;
            z-index: 1;
        }
        :global(body) {
            position: relative;
        }
    }
</style>
