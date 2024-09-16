<script>
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl } from 'flowbite-svelte'
</script>

<Navbar class="fixed top-0 z-50 !backdrop-blur-sm dark:!bg-slate-900/40">
	<NavBrand href="/">
		<span
			class="self-center whitespace-nowrap text-xl font-semibold text-primary-500 dark:text-white"
		>
			💻 Dozildev
		</span>
	</NavBrand>

	<NavUl>
		<NavLi href="/works">Works</NavLi>
		<!-- <NavLi href="/blogs">Blogs</NavLi> -->
		<NavLi href="/team">Team</NavLi>
	</NavUl>
</Navbar>
