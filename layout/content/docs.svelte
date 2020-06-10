<script>
    export let title, sections;
</script>

<div class="container">
    <h1>{title}</h1>

    {#each sections as section}
        {section.title}
        {#each section.body as paragraph}
            <p>{paragraph.p}</p>
        {/each}
    {/each}
</div>