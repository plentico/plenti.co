const nodes = [{
"path": "/blog/adding_pletiform",
"type": "blog",
"filename": "adding_pletiform.json",
"fields": {
    "title": "Build sites with good form",
    "body": [
        "Need an easy webform solution?",
        "Try adding a <a href='https://plentiform.com' target='blank' rel='noopener noreferrer'>plentiform</a>! (Coming soon)"
    ],
    "author": "Jim Fisk",
    "date": "1/26/2020"
}
},{
"path": "/blog/post1",
"type": "blog",
"filename": "post1.json",
"fields": {
    "title": "Post 1",
    "body": [
        "The first of the posts"
    ],
    "author": "Jim Fisk",
    "date": "1/24/2020"
}
},{
"path": "/blog/post2",
"type": "blog",
"filename": "post2.json",
"fields": {
    "title": "Post 2",
    "body": [
        "This is the second post."
    ],
    "author": "Jim Fisk",
    "date": "1/25/2020"
}
},{
"path": "/docs/assets",
"type": "docs",
"filename": "assets.json",
"fields": {
    "title": "Assets",
    "group": "Structure",
    "order": 5,
    "sections": [
        {
            "title": "Static Files",
            "body": [
                {
                    "p": [
                        "Static files like images and PDFs can be stored in the top level <code>assets/</code> directory.",
                        "You can reference these assets from any template from the root of the site, for example:",
                        "<code>&lt;img src=&quot;/assets/my-image.jpg&quot; /&gt;</code>."
                    ]
                },
                {
                    "p": [
                        "You can also use a path relative to the specific template. For instance if you were adding an image to",
                        "<code>layout/components/my-component.svelte</code>, you could reference the same image like",
                        "<code>&lt;img src=&quot;../../assets/my-image.jpg&quot; /&gt;</code> if you'd like."
                    ]
                }
            ]
        }
    ]
}
},{
"path": "/docs/build",
"type": "docs",
"filename": "build.json",
"fields": {
    "title": "Build",
    "group": "Commands",
    "order": 7,
    "sections": [
        {
            "title": "Description",
            "body": [
                {
                    "p": [
                        "The build command creates the static assets that can be deployed to hosting provider.",
                        "It contains the generated Svelte code that hydrates into a Single Page Application (SPA),",
                        "As well as the HTML fallbacks that allow you to navigate the site without JavaScript enabled,",
                        "improve Search Engine Optimization (SEO), and speed up the initial page load of your app."
                    ]
                }
            ]
        },
        {
            "title": "Usage",
            "body": [
                {
                    "p": [
                        "The following command will create a folder called \"public\" that contains your website: <code>plenti build</code>"
                    ]
                }
            ]
        },
        {
            "title": "Flags",
            "body": [
                {
                    "t": {
                        "head": ["Long", "Short", "Description"],
                        "data": [
                            [
                                "<code>--dir=whatever</code>",
                                "<code>-d=whatever</code>",
                                "Change the name of the \"public\" build directory to something else"
                            ],
                            [
                                "<code>--benchmar</code>",
                                "<code>-b</code>",
                                "Display build time statistics"
                            ],
                            [
                                "<code>--verbose</code>",
                                "<code>-v</code>",
                                "Shows log messages related to the build process"
                            ]
                        ]
                    }
                }
            ]
        }
    ]
}
},{
"path": "/docs/eject",
"type": "docs",
"filename": "eject.json",
"fields": {
    "title": "Eject",
    "group": "Commands",
    "order": 12,
    "sections": [
        {
            "title": "Description",
            "body": [
                {
                    "p": [
                        "Ejecting is the process of exporting core files so you can customize what plenti uses in the background to generate your site.",
                        "This functionality is generally reserved for experienced users that have a specific use",
                        "case for why the need to do this. If you want to customize your experience this way, just keep",
                        "in mind that you will no longer receive automatic updates for the ejected project and we can't",
                        "gaurantee that your site will continue to work properly."
                    ]
                }
            ]
        },
        {
            "title": "Usage",
            "body": [
                {
                    "p": [
                        "You can see all the ejectable files available to you by running <code>plenti eject</code>.",
                        "This will give you a select list to choose from."
                    ]
                },
                {
                    "p": [
                        "You can eject a specific file by calling it directly, for example <code>plenti eject router.svelte</code>"
                    ]
                }
            ]
        }
    ]
}
},{
"path": "/docs/github-actions",
"type": "docs",
"filename": "github-actions.json",
"fields": {
    "title": "GitHub Actions",
    "group": "Deployment",
    "order": 13,
    "sections": [
        {
            "title": "Description",
            "body": [
                {
                    "p": [
                        "<a href='https://pages.github.com/'>GitHub Pages</a> is a <em>free</em> hosting service integrated directly with GitHub.",
                        "You can have your Plenti websites automatically deploy to GitHub Pages by adding a <code>.github/workflows/gh-pages.yml</code>",
                        "file to your project to automatically build and deploy your website every time you push to your main branch on GitHub."
                    ]
                },
                {
                    "p": [
                        "<codeblock>name: github pages<br>",
                        "on:<br>",
                        "push:<br>",
                        "branches:<br>",
                        "- main<br>",
                        "<br>",
                        "jobs:<br>",
                        "deploy:<br>",
                        "runs-on: ubuntu-18.04<br>",
                        "steps:<br>",
                        "- uses: actions/checkout@v2<br>",
                        "<br>",
                        "- name: Setup Node<br>",
                        "uses: actions/setup-node@v2-beta<br>",
                        "with:<br>",
                        "node-version: '13'<br>",
                        "<br>",
                        "- name: Download Plenti<br>",
                        "run: wget -c $(curl -s https://api.github.com/repos/plentico/plenti/releases/latest | grep -o 'http.*Linux_64-bit.tar.gz')<br>",
                        "<br>",
                        "- name: Unpack Plenti<br>",
                        "run: tar -zxvf *_Linux_64-bit.tar.gz<br/>",
                        "<br>",
                        "- name: Install node packages<br>",
                        "run: npm install<br>",
                        "<br>",
                        "- name: Build<br>",
                        "run: ./plenti build<br>",
                        "<br>",
                        "- name: Deploy<br>",
                        "uses: peaceiris/actions-gh-pages@v3<br>",
                        "with:<br>",
                        "github_token: ${{ secrets.GITHUB_TOKEN }}<br>",
                        "publish_dir: ./public</codeblock>"
                    ]
                }
            ]
        }
    ]
}
},{
"path": "/docs",
"type": "docs",
"filename": "index.json",
"fields": {
    "title": "Introduction",
    "group": "Getting Started",
    "order": 0,
    "sections": [
        {
            "title": "What is Plenti?",
            "body": [
                {
                    "p": [
                        "Plenti is an open source Static Site Generator (SSG).",
                        "The templates are based on Svelte, which is a javascript library for building reactive user interfaces.",
                        "Because Svelte is compiled, your app stays very light and performance well, even on underpowered devices.",
                        "You might also notice that Plenti runs significantly faster than other Javascript SSGs you may have tried.",
                        "This is because the commandline interface (CLI) is built using Go and we've cut out slow processes like traditional bundlers.",
                        "Our goal is to keep the tooling to a minimal so it's easy to install and use."
                    ]
                }
            ]
        },
        {
            "title": "Why another Static Site Generator?",
            "body": [
                {
                    "p": [
                        "It's hard to argue why the world needs another SSG given the variety that already exists today, but let us try.",
                        "Most solutions have optimized for either the build process, or the display of the website.",
                        "That's why you see so many SSGs claiming to be the fastest - they are all talking about different things.",
                        "We think the missing piece that will open up the JAMstack to the masses is an integrated, Git-backed CMS.",
                        "In order to take advantage of this, we needed both a fast build and a reactive frontend that can connect to a Git repository.",
                        "That's why we're obsessing over speed (we're actively trying to make the builds even faster).",
                        "We also use a simple JSON data source instead of markdown, because we don't intend for you to edit content directly through files.",
                        "We expect this will be done completely through the website user interface. It should also require minimum setup.",
                        "There are no shortage of excellent headless CMS options on the market for JAMstack, but most require purchasing a license for",
                        "a proprietary product, take significant developer time to connect to your website, lack on features like live displays,",
                        "and there is often duplicate work to match your data source structure with the CMS fields."
                    ]
                }
            ]
        }
    ]
}
},{
"path": "/docs/installation",
"type": "docs",
"filename": "installation.json",
"fields": {
    "title": "Installation",
    "group": "Getting Started",
    "order": 1,
    "sections": [
        {
            "title": "Requirements",
            "body": [
                {
                    "p": [
                        "You must have <a href='https://nodejs.org' target='_blank' rel='noopener noreferrer'>NodeJS</a> version 13 or newer"
                    ]
                }
            ]
        },
        {
            "title": "Homebrew (Mac)",
            "body": [
                {
                    "p": [
                        "1. Add the tap: <code>brew tap plentico/homebrew-plenti</code>",
                        "<br />2. Install: <code>brew install plenti</code>"
                    ]
                }
            ]
        },
        {
            "title": "Snap (Linux)",
            "body": [
                {
                    "p": [
                        "1. Install: <code>snap install plenti</code>"
                    ]
                }
            ]
        },
        {
            "title": "Scoop (Windows)",
            "body": [
                {
                    "p": [
                        "1. Add the bucket: <code>scoop bucket add org https://github.com/plentico/scoop-plenti.git</code>",
                        "<br />2. Install: <code>scoop install plentico/scoop-plenti</code>"
                    ]
                }
            ]
        },
        {
            "title": "Manual",
            "body": [
                {
                    "p": [
                        "1. Download the latest <a href='https://github.com/plentico/plenti/releases'>release</a>",
                        "<br />2. Move it somewhere in your <code>PATH</code> (most likely <code>/usr/local/bin</code>)"
                    ]
                }
            ]
        }
    ]
}
},{
"path": "/docs/layout",
"type": "docs",
"filename": "layout.json",
"fields": {
    "title": "Layout",
    "group": "Structure",
    "order": 4,
    "sections": [
        {
            "title": "Svelte",
            "body": [
                {
                    "p": [
                        "All the templating is done in \"disappearing\" JS component framework called <a href='https://svelte.dev/'>Svelte</a>.",
                        "Svelte offers a simplified syntax and creates a welcoming developer experience for folks coming directly from an HTML/CSS background.",
                        "It also offers some performance benefits over similar frameworks since it doesn't require a virtual dom and its runtime is rather small."
                    ]
                }
            ]
        },
        {
            "title": "layout/global/html.svelte",
            "body": [
                {
                    "p": [
                        "The <code>layout/global/html.svelte</code> file is important and changing its name will break your app.",
                        "You could also potentially break your routing if you're not careful with <code>&lt;svelte:component this={route} {...node.fields} {allNodes} /&gt;</code>.",
                        "Once you're aware of those two things, this file shouldn't be too scary and is meant for you to customize."
                    ]
                }
            ]
        },
        {
            "title": "layout/content/",
            "body": [
                {
                    "p": [
                        "Files that live in this folder correspond directly to the Types defined in your content source.",
                        "For example if you have blog Type (<code>content/blog/post-whatever.json</code>) you would create a corresponding template at <code>layout/content/blog.svelte</code>.",
                        "One template should be used per Type and it will feed many content files to create individual nodes (endpoints)."
                    ]
                },
                {
                    "p": [
                        "The rest of the structure is really up to you.",
                        "We try to create logical default folders, such as <code>layout/components/</code> for reusable widgets and <code>layout/scripts/</code> for helper functions,",
                        "but feel free to completely change these and make the structure your own."
                    ]
                }
            ]
        }
    ]
}
},{
"path": "/docs/new_site",
"type": "docs",
"filename": "new_site.json",
"fields": {
    "title": "New Site",
    "group": "Commands",
    "order": 6,
    "sections": [
        {
            "title": "Description",
            "body": [
                {
                    "p": [
                        "This is the first command you'll want to run for a new project.",
                        "It creates the default folders and files for your website."
                    ]
                }
            ]
        },
        {
            "title": "Usage",
            "body": [
                {
                    "p": [
                        "You can create a new project by running <code>plenti new site YOUR_SITE_NAME</code>."
                    ]
                }
            ]
        },
        {
            "title": "Flags",
            "body": [
                {
                    "t": {
                        "head": ["Long", "Short", "Description"],
                        "data": [
                            [
                                "<code>--bare</code>",
                                "<code>-b</code>",
                                "(Coming Soon) Creates a minimalist site scaffolding with less default content."
                            ],
                            [
                                "<code>--theme=\"git@github.com:user/repo.git\"</code>",
                                "<code>-t=\"git@github.com:user/repo.git\"</code>",
                                "(Coming Soon) Point to a Git repository to use a base theme for your site."
                            ]
                        ]
                    }
                }
            ]
        }
    ]
}
},{
"path": "/docs/new_type",
"type": "docs",
"filename": "new_type.json",
"fields": {
    "title": "New Type",
    "group": "Commands",
    "order": 6,
    "sections": [
        {
            "title": "Description",
            "body": [
                {
                    "p": [
                        "This command will automatically create a folder in your <code>content/</code> directory with the",
                        "Type name, a <code>_blueprint.json</code> file inside that folder that describes the Type's field",
                        "structure, and a corresponding template in <code>layout/content/</code> that has the same name as the Type."
                    ]
                }
            ]
        },
        {
            "title": "Usage",
            "body": [
                {
                    "p": [
                        "You can create a new content type by running <code>plenti new type YOUR_NEW_TYPE</code>."
                    ]
                }
            ]
        },
        {
            "title": "Flags",
            "body": [
                {
                    "t": {
                        "head": ["Long", "Short", "Description"],
                        "data": [
                            [
                                "<code>--endpoint=true</code>",
                                "<code>-e=true</code>",
                                "Pass \"false\" if you don't want your new Type to have an endpoint that site visitors can access directly"
                            ]
                        ]
                    }
                }
            ]
        }
    ]
}
},{
"path": "/docs/paths",
"type": "docs",
"filename": "paths.json",
"fields": {
    "title": "Paths",
    "group": "Content",
    "order": 3,
    "sections": [
        {
            "title": "Endpoints",
            "body": [
                {
                    "p": [
                        "The endpoint nodes for your pages (of whatever Type) will be defined by your data source.",
                        "By default this corresponds to the structure of folders and files in your <code>content/</code> folder,",
                        "for example:<ul>",
                        "<li><code>content/index.json</code> = <code>https://example.com/</code></li>",
                        "<li><code>content/blog/post1.json</code> = <code>https://example.com/blog/post1</code></li>",
                        "<li><code>content/events/My_Event.json</code> = <code>https://example.com/events/my-event</code></li>"
                    ]
                },
                {
                    "p": [
                        "If you want to have a content source without a path (no node endpoint that site visitors can access), simply delete the corresponding svelte",
                        "template in <code>layout/content/</code>. You can do this automatically use the \"endpoint\" flag when creating a new type, for example:",
                        "<code>plenti new type YOUR_TYPE --endpoint=false</code>"
                    ]
                }
            ]
        },
        {
            "title": "Overriding Paths",
            "body": [
                {
                    "p": [
                        "You can overide the default path structure in the site's configuration file (<code>plenti.json</code>).",
                        "For example if you had a Type called <code>pages</code> and you wanted it to appear at the top level of the",
                        "site and not in the format <code>https://example.com/pages/page1</code>, you could add the following to <code>plenti.json</code>:",
                        "<br /><br /><codeblock>\"types\": {<br />&nbsp;&nbsp;\"pages\": \"/:filename\"<br />}</codeblock>",
                        "This would allow a content file located at <code>content/pages/page1.json</code> to appear in the following format: <code>https://example.com/page1</code>."
                    ]
                },
                {
                    "p": [
                        "You can use any custom key that you define in your content source, e.g. <code>:title</code>, <code>:date</code>, etc in your path, for example:",
                        "<br /><br /><codeblock>\"types\": {<br />&nbsp;&nbsp;\"blog\": \"/blog/:field(author)/:field(title)\"<br />}"
                    ]
                }
            ]
        }
    ]
}
},{
"path": "/docs/serve",
"type": "docs",
"filename": "serve.json",
"fields": {
    "title": "Serve",
    "group": "Commands",
    "order": 10,
    "sections": [
        {
            "title": "Description",
            "body": [
                {
                    "p": [
                        "Starts up a lightweight webserver you can use for local development.",
                        "This will run the build in the background when you first run the command,",
                        "and any time that you change a file in your <code>content/</code> or",
                        "<code>layout/</code> folders."
                    ]
                }
            ]
        },
        {
            "title": "Usage",
            "body": [
                {
                    "p": [
                        "You can start the server by running <code>plenti serve</code> from inside your project's root folder."
                    ]
                }
            ]
        },
        {
            "title": "Flags",
            "body": [
                {
                    "t": {
                        "head": ["Long", "Short", "Description"],
                        "data": [
                            [
                                "<code>--build=true</code>",
                                "<code>-b=true</code>",
                                "Set to \"false\" to disable the build step and use existing \"public\" directory."
                            ],
                            [
                                "<code>--dir=public</code>",
                                "<code>-d=public</code>",
                                "Change the name of the build directory."
                            ],
                            [
                                "<code>--port=3000</code>",
                                "<code>-p=3000</code>",
                                "Change the port for the local webserver. This can be helpful when running multiple websites at the same time."
                            ]
                        ]
                    }
                }
            ]
        }
    ]
}
},{
"path": "/docs/types",
"type": "docs",
"filename": "types.json",
"fields": {
    "title": "Types",
    "group": "Content",
    "order": 2,
    "sections": [
        {
            "title": "Data Source",
            "body": [
                {
                    "p": [
                        "The <code>content/</code> folder in a project is where all your data lives (in JSON format).",
                        "This is typically divided into multiple subfolders that define your types.",
                        "Types are just a way to group content of a similar structure.",
                        "Individual files inside a type are very flexible,",
                        "in fact you can define any field schema you'd like and there are no required keys.",
                        "Even though files may be grouped together as a type,",
                        "they can actually have variability between them in terms of their field structure - just",
                        "make sure you account for this in your corresponding <code>layout/content/</code> files!"
                    ]
                }
            ]
        },
        {
            "title": "Single file types",
            "body": [
                {
                    "p": [
                        "Anything that appears at the first level within the content folder is a type.",
                        "This can include single files such as <code>index.json</code> and <code>404.json</code>,",
                        "which are also types, but only have a one-off data source.",
                        "You can define your own single file types this way if you'd like."
                    ]
                }
            ]
        },
        {
            "title": "Blueprints",
            "body": [
                {
                    "p": [
                        "There is an optional, special named file that goes inside your individual type folders named <code>_blueprint.json</code>.",
                        "This defines the default field schema for that specific type.",
                        "The keys of the blueprint correspond to field names used in the content files and the values tell the kind of field that is being used.",
                        "<strong>TODO:</strong> Currently the blueprint doesn't do much and there is no list of standardized values, but in the future this will",
                        "be fleshed out and it will aid in generating scaffoling and tying into the cms (see <a href='https://github.com/plentico/plenti/issues/15'>this issue</a>)."
                    ]
                }
            ]
        }
    ]
}
},{
"path": "/",
"type": "index",
"filename": "index.json",
"fields": {
	"intro": {
		"title": "Websites that are easier<br />for <span class='text-accent-dark'>everyone</span>.",
		"body": "Is your \"site builder\" confusing editors and frustrating devs? Time to try tools designed specifically for your area of focus.",
		"cta": [
			{
				"link": "/download",
				"text": "Give it to me"
			},
			{
				"link": "/why",
				"text": "Tell me more"
			}
		]
	},
	"editor": {
		"title": "Edit right on the page",
		"body": "Seriously, give it a shot! You can edit this text directly. That's how easy it is to maintain the content on your site."
	},
	"features": [
		{
			"title": "No Security Updates",
			"img": "/assets/security.svg"
		},
		{
			"title": "Cheap / Free Hosting",
			"img": "/assets/hosting.svg"
		},
		{
			"title": "Fast Page Loads",
			"img": "/assets/speed.svg"
		},
		{
			"title": "Fast Build Times",
			"img": "/assets/builds.svg"
		},
		{
			"title": "Distributed Sites",
			"img": "/assets/cdn.svg"
		},
		{
			"title": "No Vendor Lock-In",
			"img": "/assets/vendor.svg"
		}
	],
	"setup": [
		{
			"title": "Out-of-the-Box",
			"title_accent": "Content Editing",
			"body": "Ship sites with a lightweight Content Management System. No extra software is needed to handoff to editors.",
			"img": "/assets/"
		},
		{
			"title": "Git Backend",
			"title_accent": "No Database",
			"body": "Ditch the SQL headaches and simply connect to a Git backend. Finally content editors and developers can speak the same language.",
			"img": "/assets/git.png"
		},
		{
			"title": "Content Structure",
			"title_accent": "Flexible",
			"body": "There are no required fields or content types in Plenti. You define whatever structure works best for you and your project.",
			"img": "/assets/json.png"
		},
		{
			"title": "Svelte Components",
			"title_accent": "Reactive",
			"body": "Build with a fast and easy to understand component framework. Enjoy automatic HTML fallbacks for your single page apps.",
			"img": "/assets/"
		}
	],
	"cta": {
		"title": "Plenti is 100% Free and Open Source",
		"link": {
			"text": "Show me the code",
			"url": "https://github.com/plentico/plenti"
		}
	}
}
},{
"path": "/about",
"type": "pages",
"filename": "about.json",
"fields": {
	"title": "About Plenti",
	"description": [
		"Plenti is a minimalist <a href='https://jamstack.org/' target='blank' rel='noopener noreferrer'>JAMstack</a> framework that's flexible and easy to use.",
		"We've cut out as many dependencies as possible so you can focus on being productive instead of wrestling with a complicated toolchain.",
		"The <a href='https://svelte.dev/' target='blank' rel='noopener noreferrer'>Svelte</a> frontend <em>cuts weight</em> so users get a snappy experience, even with bad internet connections or underpowered devices.",
		"The <a href='https://golang.org/' target='blank' rel='noopener noreferrer'>Go</a> backend <em>cuts wait</em> so apps build faster allowing devs to get more done and editors to get realtime feedback on content changes.",
		"Thanks for taking a look!"
	],
	"author": "Jim Fisk"
}
},{
"path": "/contact",
"type": "pages",
"filename": "contact.json",
"fields": {
	"title": "Contact",
	"description": [
		"Plenti is 100% free and open source!",
		"You can fork it for your own purposes, or help us out by reporting bugs / contributing code on <a href='https://github.com/plentico/plenti' target='blank' rel='noopener noreferrer'>Our GitHub</a>."
	],
	"author": "Jim Fisk"
}
},{
"path": "/download",
"type": "pages",
"filename": "download.json",
"fields": {
    "title": "Download",
    "os": [
        {
            "title": "Mac",
            "img": "mac.svg"
        },
        {
            "title": "Windows",
            "img": "windows.svg"
        },
        {
            "title": "Linux",
            "img": "linux.svg"
        }
    ]
}
},{
"path": "/themes",
"type": "pages",
"filename": "themes.json",
"fields": {
    "title": "Themes (Coming Soon)",
    "themes": [
        "aerial.png",
        "educenter.png",
        "fresh.png",
        "hargo.png",
        "influencer.png",
        "navigator.png",
        "radiation.png",
        "restaurant.png",
        "roxo.png",
        "universal.png"
    ]
}
},];

export default nodes;