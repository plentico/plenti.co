<script>
    export let title, sections, allNodes;
    import DocsNav from "../components/docs_nav.svelte";
    let checked=false;
    const uncheck = () => {
        checked=false;
    }
</script>

<div class="docs-container">

    <div class="container">
    <div>
        <input type="checkbox" id="nav-toggle" class="hidden" bind:checked={checked}>
        <label for="nav-toggle" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </label>
        <DocsNav allNodes={allNodes} />
    </div>
    {#if checked}
        <div class="sidebar-overlay" on:click={uncheck}></div>
    {/if}
    <div class="docs">
        <h1>{title}</h1>

        {#each sections as section}
            <strong class="title">{section.title}</strong>
            {#each section.body as paragraph}
                <p class="section-body">
                    {#if paragraph.p}
                        {#each paragraph.p as line}
                            {@html line}&nbsp;
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
    .docs-container {
        display: flex;
    }
    .section-body :global(a) {
        font-weight: bold;
        color: var(--primary);
    }
    .section-body :global(table) {
        width: 100%;
        text-align: left;
    }
    .container {
        padding-top: 20px;
        display: flex;
    }
    .title {
        font-size: 2rem;
        margin-top: 40px;
        display: block;
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
    #nav-toggle:checked~#hamburger span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    #nav-toggle:checked~#hamburger span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    #nav-toggle:checked~#hamburger span:nth-child(1),
    #nav-toggle:checked~#hamburger span:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
    }
    @media (max-width: 600px) {
        .docs-container .container {
            flex-direction: column;
        }
        #hamburger {
            display: block;
        }
        .docs-container :global(.sidebar) {
            position: absolute;
            background-color: var(--base-lightest);
            max-width: 0;
            overflow: hidden;
            left: -40px;
            border: none;
            padding: 20px;
            z-index: 2;
            box-shadow: 0 5px 6px -4px rgba(0,0,0,.2);
            -webkit-transition: all .4s ease-in-out;
            -moz-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
        }
        #nav-toggle:checked~:global(.sidebar) {
            max-width: 200px;
            left: 0;
        }
        .sidebar-overlay {
            background: rgba(54, 25, 25, .5);
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            position: absolute;
            z-index: 1;
        }
    }
</style>