<script>
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Scene from '$lib/components/Scene.svelte'
</script>

<Header />

<main class="mx-auto flex min-w-0 flex-col space-y-4 dark:text-white">
	<Scene />
	<slot></slot>
</main>
