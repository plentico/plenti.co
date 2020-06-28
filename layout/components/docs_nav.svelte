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
    
    let active = [];
    const setActive = (path) => {
        active = [];
        if (path == window.location.pathname) {
            active[path] = true;
        }
    }
</script>
<div class="sidebar">
    {#each allNodes.sort(sortNav) as node}
        {#if node.type == "docs"}
            {#if !group.includes(node.fields.group)}
                <strong>{addGroup(node.fields.group)}</strong>
            {/if}
            <a on:click={setActive(node.path)} class:active={active[node.path]} href="{node.path}" class="nav-link">{node.fields.title}</a>
        {/if}
    {/each}
</div>

<style>
    .sidebar {
        border-right: 1px solid var(--base);
        padding-right: 40px;
        margin-right: 40px;
        margin-top: 20px;
    }
    strong, .nav-link {
        display: block;
        margin-bottom: 10px;
        white-space: nowrap;
    }
    .active {
        color: var(--accent-dark);
    }
</style>