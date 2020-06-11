<script>
    export let title, sections;
</script>

<div class="container">
    <h1>{title}</h1>

    {#each sections as section}
        <strong class="title">{section.title}</strong>
        {#each section.body as paragraph}
            <p>
                {#each paragraph.p as line}
                    {line}&nbsp;
                {/each}
            </p>
        {/each}
    {/each}
</div>

<style>
    .container {
        padding-top: 50px;
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