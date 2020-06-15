<script>
    export let title, sections, allNodes;
    import DocsNav from "../components/docs_nav.svelte";
</script>

<div class="docs-container">
    <DocsNav allNodes={allNodes} />

    <div class="container">
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
    }
    .title {
        font-size: 2rem;
        margin-top: 40px;
        display: block;
    }
    p {
        line-height: 1.75rem;
    }
</style>