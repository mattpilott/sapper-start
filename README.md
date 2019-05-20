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

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## How does this differ from sapper-template?

Good question, I found myself doing these changes on every project and thought I'd save myself and you some time by making a little repo you could import just like the official sapper-template.

Here are the differences:
* Removed default routes, components and emptied index & layout
* SCSS support out-of-the-box
* Open the browser automatically
* Adds css reset based on normalize
* Adds `numworker: 1` in rollup.config to prevent crash on servers with a single processor core
* Improved favicons with broader coverage
* Updated manifest for PWA support


## Bugs and feedback

If you run into an issue which you don't see in the normal sapper-template, open an [issue](https://github.com/matt3224/sapper-start/issues).
