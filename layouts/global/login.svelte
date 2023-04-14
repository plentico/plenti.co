<script>
    export let hash, user;

    const getHash = () => {
        hash = window.location.hash;
    }

    const removeHash = () => {
        hash = "";
        window.location.hash = "";
    }

    const staffLogin = () => {
        $user.login();
        window.location.hash = ""
    }
</script>

<svelte:window on:hashchange={getHash} />

{#if hash && hash === "#login"}
    <div class="modal-wrapper" on:click={removeHash}>
        <div class="modal" on:click|stopPropagation>
            <svg on:click={removeHash} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <section class="content-wrapper staff">
                <h1>Staff Login</h1>
                <p class="desc">Sign in to edit the website.</p>
                <button on:click|preventDefault={staffLogin}>
                    Staff login
                </button>
            </section>
        </div>
    </div>
{/if}

<style>
    .modal-wrapper {
        z-index: 99999;
        position: fixed;
        inset: 0px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .modal {
        box-shadow: rgb(68 74 87 / 15%) 0px 4px 12px 0px, rgb(68 74 87 / 25%) 0px 1px 3px 0px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        max-width: 800px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
    }
    .icon-tabler-x {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
    button {
        cursor: pointer;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: 1px solid;
        margin-bottom: 20px;
        width: 100%;
        padding: 20px;
    }
    button:hover {
        background-color: whitesmoke;
    }
</style>
