<script lang="ts">
	import React from '$lib/components/svgs/React.svelte'
	import Vue from '$lib/components/svgs/Vue.svelte'
	import Svelte from '$lib/components/svgs/Svelte.svelte'
	import CHash from '$lib/components/svgs/CHash.svelte'
	import Node from '$lib/components/svgs/Node.svelte'
	import Python from '$lib/components/svgs/Python.svelte'

	import { fade } from 'svelte/transition'

	let framework = ''
	let toolColor = ''

	function onHover(text: string) {
		framework = text
		if (text === 'React') {
			toolColor = '#61dafb'
		} else if (text === 'Vue') {
			toolColor = '#42b883'
		} else if (text === 'Svelte') {
			toolColor = '#ff3e00'
		} else if (text === 'Node') {
			toolColor = '#339933'
		} else if (text === 'Python') {
			toolColor = '#ffd43b'
		} else if (text === 'C#') {
			toolColor = '#512BD4'
		}
	}
</script>

<section class=" bg-slate-800 py-24">
	<div class="mx-auto grid max-w-3xl grid-cols-3 justify-items-center gap-4 pt-1 md:grid-cols-5">
		<h6 class="col-span-3 text-xl font-semibold md:col-span-2 md:row-span-2">
			Tool
			{#key framework}
				<span in:fade={{ duration: 500 }}>
					{framework || 'framework'}
				</span>
			{/key}
		</h6>
		<h6 class="aspect-square w-full max-w-16" on:mouseenter={() => onHover('React')}>
			<React />
		</h6>

		<h6 class="aspect-square w-full max-w-16" on:mouseenter={() => onHover('Vue')}>
			<Vue />
		</h6>

		<h6 class="aspect-square w-full max-w-16" on:mouseenter={() => onHover('Svelte')}>
			<Svelte />
		</h6>

		<h6 class="aspect-square w-full max-w-16" on:mouseenter={() => onHover('Node')}>
			<Node />
		</h6>

		<h6 class="aspect-square w-full max-w-16" on:mouseenter={() => onHover('Python')}>
			<Python />
		</h6>

		<h6 class="aspect-square w-full max-w-16" on:mouseenter={() => onHover('C#')}>
			<CHash />
		</h6>
	</div>
</section>

<style>
</style>
