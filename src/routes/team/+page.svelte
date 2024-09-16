<script lang="ts">
	import { Github } from 'flowbite-svelte-blocks'

	let members = [
		{
			href: '/team/nipat',
			src: '/images/nipas.jpg',
			alt: 'Nipas Wongnitipat',
			name: 'Nipas Wongnitipat',
			jobTitle: 'Backend Developer',
			github: 'https://github.com/IamTakaiii'
		},
		{
			href: '/team/sakarn',
			src: '/images/sakarn.JPG',
			alt: 'Sakarn Bantadjan',
			name: 'Sakarn Bantadjan',
			jobTitle: 'Frontend Developer',
			github: 'https://github.com/macsakarn'
		}
	]
</script>

<div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
	<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
		Our team
	</h2>
	<p class="font-light text-slate-500 dark:text-slate-400 sm:text-xl">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, officia deleniti porro numquam
		voluptate culpa voluptates animi, aliquam iusto earum eum id nemo excepturi consectetur qui ad
		pariatur architecto quidem.
	</p>
</div>
<div class="flex flex-wrap justify-center gap-8 lg:gap-16">
	{#each members as member}
		<div class="text-center text-slate-500 dark:text-slate-400">
			<a href={member.href}>
				<img
					class="mx-auto mb-4 h-36 w-36 rounded-full object-cover object-top"
					src={member.src}
					alt="Bonnie Avatar"
				/>
			</a>
			<h3 class="mb-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
				<a href={member.href}>{member.name}</a>
			</h3>
			<p>{member.jobTitle}</p>
			<ul class="mt-4 flex justify-center space-x-4">
				<li>
					<Github href={member.github} />
				</li>
			</ul>
		</div>
	{/each}
</div>
