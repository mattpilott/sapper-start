# sapper-start

An opinionated starter template based on the rollup [sapper-template](https://github.com/sveltejs/sapper-template/tree/rollup). To clone it and get started:

```bash
# for Rollup
npx degit matt3224/sapper-start my-app
cd my-app
npm install # or yarn!
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started with Sapper itself.


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


## Bugs and feedback

If you run into an issue which you don't see in the normal sapper-template, open an [issue](https://github.com/matt3224/sapper-start/issues).
