![Hero](https://i.postimg.cc/fLPyrJ3L/hero.png)

<p align="center">
  An opinionated starter template based on the Rollup Sapper template. 🚀
</p>

## Hello 👋,

![GitHub release](https://img.shields.io/github/release/matt3224/sapper-start.svg?style=for-the-badge)

The purpose of this repo was to save me time by doing all of the things I do on every Sapper project, but hey you might find it useful too right?!

To clone it and get started:

```bash
# for Rollup
npx degit matt3224/sapper-start my-app
cd my-app
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started with Sapper itself.

<hr/>

If you use this alot you can alias it like so:
```bash
alias sapper-start='npx degit https://github.com/matt3224/sapper-start .'
```
Then simply cd into your empty project directory and run `sapper-start`


## How does this differ from sapper-template?

Good question, I found myself doing these changes on every project and thought I'd save myself and you some time by making a little repo you could import just like the official sapper-template.

Here are the differences:
* Removed default routes, components and emptied index & layout
* SCSS support out-of-the-box
* Adds css reset based on normalize
* Adds `numworker: 1` in rollup.config to prevent crash on servers with a single processor core
* Improved favicons with broader coverage
* Updated manifest for PWA support
* Switched to default browserslist config
* Added lang attribute to html tag
* Double quotes instead of single in html/svelte files
* Ability to bypass relative paths with `~` eg. `import { util } from '~/utils.js';`
* Moves css import to client.js to prevent extraneous caching
* Adds a light suggested structure for library and component folders
* Prints the package version in the html head as a meta tag
* Adds an optional utility package (Tree-shaken so if you don't use it you don't get it)


## Bugs and feedback

If you run into an issue which you don't see in the normal sapper-template, open an [issue](https://github.com/matt3224/sapper-start/issues).
