<script lang="ts">
	import Godzila from '$lib/components/Godzila.svelte'
	import { T, Canvas } from '@threlte/core'
	import { OrbitControls, Grid } from '@threlte/extras'

	let controls: any
	export const reset = () => controls.reset()
</script>

<div class="-mb-16 h-72 md:-mb-16 md:h-96 lg:-mb-32 xl:h-[640]">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[0, 10, 20]}>
			<OrbitControls enableDamping target={[0, 4, 0]} />
		</T.PerspectiveCamera>
		<Godzila />

		<!-- <Grid sectionColor={'#ff3e00'} sectionThickness={1} cellColor={'#cccccc'} gridSize={40} /> -->
		<T.AmbientLight color="white" intensity={2}></T.AmbientLight>
	</Canvas>
</div>
