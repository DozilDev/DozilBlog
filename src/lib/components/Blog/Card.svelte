<script>
	import { Card, Button, Toggle } from 'flowbite-svelte'
	import { ArrowRightOutline } from 'flowbite-svelte-icons'
	let vCard = false
</script>

<div class="space-y-4">
	<Card img="/images/image-1.webp" reverse={vCard}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal leading-tight text-slate-700 dark:text-slate-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
		</Button>
	</Card>
	<Toggle bind:checked={vCard} class="italic dark:text-slate-500">Reverse</Toggle>
</div>
