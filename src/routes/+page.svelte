<script>
	import Tool from '$lib/components/Main/Tool.svelte'
	import WorkCards from '$lib/components/Main/WorkCards.svelte'
	import ShowCase from '$lib/components/Main/ShowCase.svelte'
	import Blogs from '$lib/components/Blog/Blogs.svelte'
	import { Hr, Blockquote } from 'flowbite-svelte'
</script>

<section>
	<Blockquote
		class="mx-auto max-w-lg rounded-md !bg-slate-500/50 p-4 text-center dark:!bg-slate-900/30"
	>
		"Lorem ipsum dolor sit amet consectetur"
	</Blockquote>
</section>

<WorkCards />
<Hr />
<Tool />
<Hr />
<ShowCase />
<Hr />
<Blogs />
