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
        background-color: var(--base-light);
        border-bottom-right-radius: 5px;
        border: 1px solid var(--base);
        border-top-style: none;
    }
    strong {
        display: block;
        margin: 20px 20px 10px 20px; 
    }
    .nav-link {
        display: block;
        margin: 5px 20px 5px 40px;
    }
</style>