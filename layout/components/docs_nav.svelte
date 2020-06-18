<script>
    export let allNodes;
    let group = [];
    const addGroup = newGroup => {
        group.push(newGroup);
        return newGroup;
    }
    const sortNav = (a, b) => {
        if (typeof a.fields.order !== "undefined" && typeof b.fields.order !== "undefined") {
            return a.fields.order - b.fields.order;
        }
        return -1;
    }
</script>
<div class="sidebar">
    {#each allNodes.sort(sortNav) as node}
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
        border-right: 1px solid var(--base);
        padding: 0 40px;
        margin: 40px 0;
    }
    strong, .nav-link {
        display: block;
        margin-bottom: 10px;
    }
</style>