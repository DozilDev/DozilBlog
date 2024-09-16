<script>
	import { Button } from 'flowbite-svelte'
</script>

<article class="format mx-auto max-w-3xl dark:format-invert lg:format-lg">
	<h3 class="text-xl font-bold">Show case</h3>

	<div class="grid grid-cols-2 gap-4">
		<div>
			<img class="h-48 w-96 object-cover" src="https://picsum.photos/400" alt="showcase" />
		</div>
		<div>
			<h4>Title</h4>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim voluptatem quod</p>
			<div class="flex justify-end">
				<Button>Read more</Button>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<div>
			<img class="h-48 w-96 object-cover" src="https://picsum.photos/300" alt="showcase" />
		</div>
		<div>
			<h4>Title</h4>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim voluptatem quod</p>
			<div class="flex justify-end">
				<Button>Read more</Button>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<div>
			<img class="h-48 w-96 object-cover" src="https://picsum.photos/200" alt="showcase" />
		</div>
		<div>
			<h4>Title</h4>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim voluptatem quod</p>
			<div class="flex justify-end">
				<Button>Read more</Button>
			</div>
		</div>
	</div>
</article>
