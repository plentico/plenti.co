<script>
    export let allContent;
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
        setTimeout(function(){
            if (path == window.location.pathname) {
                active[path] = true;
            }
        }, 100);
    }

    // Set active on initial page load.
    import {onMount} from 'svelte/internal';
    onMount(async () => {
        let initialPath = await window.location.pathname;
        active[initialPath] = true;
    });
</script>
<div class="sidebar">
    {#each allContent.sort(sortNav) as content (content.path)}
        {#if content.type == "docs"}
            {#if !group.includes(content.fields.group)}
                <strong>{addGroup(content.fields.group)}</strong>
            {/if}
            <a on:click={() => setActive(content.path)} class:active={active[content.path]} href="{content.path}" class="nav-link">{content.fields.title}</a>
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
