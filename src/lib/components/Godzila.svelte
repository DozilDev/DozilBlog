<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@2.0.3 gazilot.gltf -t -D --transform
-->

<script lang="ts">
	import type * as THREE from 'three'
	import { Group } from 'three'
	import {
		T,
		type Props,
		type Events,
		type Slots,
		forwardEventHandlers,
		useTask
	} from '@threlte/core'
	import { useGltf } from '@threlte/extras'

	type $$Props = Props<THREE.Group>
	type $$Events = Events<THREE.Group>
	type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } }

	export const ref = new Group()

	type GLTFResult = {
		nodes: {
			gazilot_ediotpCube15group6: THREE.Mesh
			gazilot_ediotgroup6pCube28: THREE.Mesh
			gazilot_ediotgroup6pCube31: THREE.Mesh
			gazilot_ediotgroup6pCube12: THREE.Mesh
			gazilot_ediotgroup6pCube16: THREE.Mesh
			gazilot_ediotgroup6pCube14: THREE.Mesh
			gazilot_ediotgroup6pCube13: THREE.Mesh
			gazilot_ediotgroup6pCube32: THREE.Mesh
			gazilot_ediotgroup6pCube11: THREE.Mesh
			gazilot_ediotgroup6pCube10: THREE.Mesh
			gazilot_ediotgroup6pCube6: THREE.Mesh
			gazilot_ediotgroup6pCube8: THREE.Mesh
			gazilot_ediotgroup6pCube33: THREE.Mesh
			gazilot_ediotgroup6pCube7: THREE.Mesh
			gazilot_ediotgroup6pCube34: THREE.Mesh
			gazilot_ediotgroup6pCube35: THREE.Mesh
			gazilot_ediotgroup6pCube1: THREE.Mesh
			gazilot_ediotgroup6pCube30: THREE.Mesh
			gazilot_ediotgroup6pCube36: THREE.Mesh
			gazilot_ediotgroup6pCube37: THREE.Mesh
			gazilot_ediotgroup6pCube38: THREE.Mesh
			gazilot_ediotgroup6pCube39: THREE.Mesh
			gazilot_ediotgroup6pCube40: THREE.Mesh
			gazilot_ediotgroup6pCube41: THREE.Mesh
			gazilot_ediotgroup6pCube42: THREE.Mesh
			gazilot_ediotgroup6pCube27: THREE.Mesh
			gazilot_ediotgroup6pCube26: THREE.Mesh
			gazilot_ediotgroup6pCube25: THREE.Mesh
			gazilot_ediotgroup6pCube24: THREE.Mesh
			gazilot_ediotgroup6pCube21: THREE.Mesh
			gazilot_ediotgroup6pCube20: THREE.Mesh
			gazilot_ediotgroup6pCube3: THREE.Mesh
			gazilot_ediotgroup6pCube43: THREE.Mesh
			gazilot_ediotgroup6pCube44: THREE.Mesh
			gazilot_ediotgroup6pCube45: THREE.Mesh
			gazilot_ediotgroup6pCube46: THREE.Mesh
			gazilot_ediotgroup6pCube23: THREE.Mesh
			gazilot_ediotgroup6pCube19: THREE.Mesh
			gazilot_ediotgroup6pCube18: THREE.Mesh
			gazilot_ediotgroup6pCube22: THREE.Mesh
		}
		materials: {
			lambert2SG: THREE.MeshStandardMaterial
			['gazilot_ediot:lambert5SG']: THREE.MeshStandardMaterial
			['gazilot_ediot:lambert3SG']: THREE.MeshStandardMaterial
			['gazilot_ediot:lambert4SG']: THREE.MeshStandardMaterial
			lambert6SG: THREE.MeshStandardMaterial
		}
	}

	const gltf = useGltf<GLTFResult>('/gazilot-transformed.glb', { useDraco: true })

	const component = forwardEventHandlers()

	let rotation = 0
	useTask((delta) => {
		rotation += delta
	})
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component} rotation.y={rotation}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotpCube15group6.geometry}
			material={gltf.materials.lambert2SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube28.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube31.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube12.geometry}
			material={gltf.materials.lambert2SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube16.geometry}
			material={gltf.materials.lambert2SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube14.geometry}
			material={gltf.materials.lambert2SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube13.geometry}
			material={gltf.materials.lambert2SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube32.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube11.geometry}
			material={gltf.materials.lambert2SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube10.geometry}
			material={gltf.materials.lambert2SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube6.geometry}
			material={gltf.materials.lambert2SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube8.geometry}
			material={gltf.materials['gazilot_ediot:lambert3SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube33.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube7.geometry}
			material={gltf.materials['gazilot_ediot:lambert3SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube34.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube35.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube1.geometry}
			material={gltf.materials['gazilot_ediot:lambert3SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube30.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube36.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube37.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube38.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube39.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube40.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube41.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube42.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube27.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube26.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube25.geometry}
			material={gltf.materials['gazilot_ediot:lambert3SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube24.geometry}
			material={gltf.materials['gazilot_ediot:lambert3SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube21.geometry}
			material={gltf.materials['gazilot_ediot:lambert4SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube20.geometry}
			material={gltf.materials['gazilot_ediot:lambert4SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube3.geometry}
			material={gltf.materials['gazilot_ediot:lambert4SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube43.geometry}
			material={gltf.materials['gazilot_ediot:lambert4SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube44.geometry}
			material={gltf.materials['gazilot_ediot:lambert4SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube45.geometry}
			material={gltf.materials['gazilot_ediot:lambert4SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube46.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube23.geometry}
			material={gltf.materials['gazilot_ediot:lambert3SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube19.geometry}
			material={gltf.materials['gazilot_ediot:lambert5SG']}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube18.geometry}
			material={gltf.materials.lambert6SG}
			material.metalness={0.1}
		/>
		<T.Mesh
			geometry={gltf.nodes.gazilot_ediotgroup6pCube22.geometry}
			material={gltf.materials['gazilot_ediot:lambert3SG']}
			material.metalness={0.1}
		/>
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
