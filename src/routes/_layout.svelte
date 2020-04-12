<svelte:head>
   <meta name="version" content="pkg.version">
</svelte:head>

<main>
   <slot {segment} />
</main>

<script>
   export let segment;
</script>

<style lang="scss">

</style>