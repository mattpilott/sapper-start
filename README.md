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

If you use this a lot you can alias it by putting this in your zshrc or bashrc:
```bash
alias sapper-start='npx degit https://github.com/matt3224/sapper-start .'
```
Then simply cd into your empty project directory and run `sapper-start`


## How does this differ from sapper-template?

Good question, I found myself doing these changes on every project and thought I'd save myself and you some time by making a little repo you could import just like the official sapper-template.

Here are the differences:
* Adds SCSS support out-of-the-box
* Adds css reset based on normalize
* Adds `numworker: 1` in rollup.config to prevent crash on servers with a single processor core
* Adds a light suggested structure for library and component folders
* Adds an optional utility package (Tree-shaken so if you don't use it you don't get it)
* Adds the package version in the html head as a meta tag
* Adds PWA support by default
* Adds standard allow all robots.txt
* Adds server.js middleware to redirect trailing slash urls to non trailing slash
* Adds ability to bypass relative paths with `~` & auto resolves .js, .mjs, .html, .svelte, .scss
   * eg. `import { util } from '~/utils';` instead of `import { util } from '../../utils.js';`
* Changes global css link to a client.js import which prevents extraneous caching
* Changes favicons with broader coverage
* Changes single quotes to double in html/svelte files
* Removes default routes, components and emptied index & layout
* Removes custom browserslist config to use default


## Bugs and feedback

If you run into an issue which you don't see in the normal sapper-template, open an [issue](https://github.com/matt3224/sapper-start/issues).
