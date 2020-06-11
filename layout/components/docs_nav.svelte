<script>
    export let allNodes;
    let group = [];
    const addGroup = newGroup => {
        group.push(newGroup);
        return newGroup;
    }
</script>
<div class="sidebar">
    {#each allNodes as node}
        {#if node.type == "docs"}
            {#if !group.includes(node.fields.group)}
                <strong>{addGroup(node.fields.group)}</strong>
            {/if}
            <a href="{node.path}" class="nav-link">{node.fields.title}</a>
        {/if}
    {/each}
</div>

<style>
    .sidebar {
        background-color: var(--base-light);
        border-bottom-right-radius: 5px;
        border: 1px solid var(--base);
        border-top-style: none;
    }
    .nav-link {
        display: block;
        margin: 5px 20px;
    }
</style>