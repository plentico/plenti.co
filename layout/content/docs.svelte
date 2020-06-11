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
                    {#each paragraph.p as line}
                        {@html line}&nbsp;
                    {/each}
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