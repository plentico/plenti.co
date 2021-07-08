<script>
    export let name, built_by, designed_by;

    let machine_name = name.toLowerCase();
</script>

<div class="container">
    <a href="/themes" class="back"><span class="arrow">🠔</span>Back to themes list</a>

    <h1>{name}</h1>

    <div class="columns">
        <div class="content">
            <div>Repo: <a href="https://github.com/plenti-themes/{machine_name}">https://github.com/plenti-themes/{machine_name}</a></div>
            <div>Built by: <a href="https://github.com/{built_by}">{built_by}</a></div>
            <div>Designed by: <a href="https://github.com/{designed_by}">{designed_by}</a></div>

            <div class="install">
                <div>Start a new project using this theme:</div>
                <div><code>plenti new site my-site --theme=git@github.com:plenti-themes/{machine_name}</code></div>
                <details>
                    <summary>Or add this theme to an existing project:</summary>
                    <ol>
                        <li><code>plenti theme add git@github.com:plenti-themes/{machine_name}</code></li>
                        <li><code>plenti theme enable {machine_name}</code></li>
                        <li>Make sure you manually copy any route overrides and delete conflicting content or layouts.</li>
                    </ol>
                </details>
            </div>
            <a class="button" href="https://plenti-themes.github.io/{machine_name}">See demo</a>
        </div>
        <img src="/assets/themes/{machine_name}.png" alt="{name} Plenti theme" />
    </div>
</div>

<style>
    .back {
        display: inline-block;
        margin: 20px 0 0 20px;
    }
    .arrow {
        position: absolute;
        left: -20px;
        top: 2px;
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