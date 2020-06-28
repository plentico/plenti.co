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
    const setActive = (i, path) => {
        if (path == window.location.pathname) {
            active[i] = true;
        }
    }
    
    let currentPage = "";
    //const getUrl = async () => {
    const getUrl = () => {
        //currentPage = await window.location.pathname;
        currentPage = window.location.pathname;
        console.log(currentPage);
    }
</script>
<div class="sidebar">
    {#each allNodes.sort(sortNav) as node, i}
        {#if node.type == "docs"}
            {#if !group.includes(node.fields.group)}
                <strong>{addGroup(node.fields.group)}</strong>
            {/if}
            <a on:click={setActive(i, node.path)} class:active={active[i]} href="{node.path}" class="nav-link">{node.fields.title}</a>
            <!-- <a on:click={() => getUrl()} href="{node.path}" class="nav-link{node.path == currentPage ? ' active' : ''}">{node.fields.title}</a> -->
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