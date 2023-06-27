<script>
    export let name, built_by, designed_by;

    let machine_name = name.toLowerCase().replaceAll(' ', '-');
</script>

<div class="container">
    <a href="/themes" class="back">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="#22a6ed" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
        </svg>
        <span>Back to themes list</span>
    </a>

    <h1>{name}</h1>

    <div class="columns">
        <div class="content">
            <div>Repo: <a href="https://github.com/plenti-themes/{machine_name}">https://github.com/plenti-themes/{machine_name}</a></div>
            <div>Built by: <a href="https://github.com/{built_by}">{built_by}</a></div>
            <div>Designed by: <a href="https://github.com/{designed_by}">{designed_by}</a></div>

            <div class="install">
                <div>Start a new project using this theme:</div>
                <div><code>plenti new site my-site --theme=https://github.com/plenti-themes/{machine_name}</code></div>
                <details>
                    <summary>Or add this theme to an existing project:</summary>
                    <ol>
                        <li><code>plenti theme add https://github.com/plenti-themes/{machine_name}</code></li>
                        <li><code>plenti theme enable {machine_name}</code></li>
                        <li>Make sure you manually copy any route overrides and delete conflicting content or layouts.</li>
                    </ol>
                </details>
            </div>
            <a class="button" href="https://plenti-themes.github.io/{machine_name}">See demo</a>
        </div>
        <img src="/media/themes/{machine_name}.webp" alt="{name} Plenti theme" />
    </div>
</div>

<style>
    .back {
        display: flex;
        align-items: center;
    }
    a {
        font-weight: bold;
        color: var(--primary);
    }
    a.button {
        color: var(--base-lightest);
        display: inline-block;
    }
    .columns {
        display: flex;
    }
    .content {
        flex: 1;
        line-height: 1.5rem;
    }
    img {
        box-shadow: 0 0 8px 2px rgb(0 0 0 / 20%);
        width: 500px;
        height: 100%;
    }
    summary {
        cursor: pointer;
        color: gray;
        margin-top: 10px;
    }
    .install {
        margin: 20px 0;
    }
    @media (max-width: 999px) {
        .columns {
            display: block;
        }
        img {
            margin-top: 40px;
            width: 100%;
            height: auto;
        }
    }
</style>
