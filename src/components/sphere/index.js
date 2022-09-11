import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import BaseMap from "../../assets/basecolor.jpg";
import Normal from "../../assets/normal.jpg";
import Specular from "../../assets/ambientOcclusion.jpg";
import { Stars } from "@react-three/drei";

function Sphere(props) {
	const [colorMap, specularMap, normalMap] = useLoader(TextureLoader, [
		BaseMap,
		Specular,
		Normal,
	]);
	const sphereRef = useRef();
	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		if(sphereRef.current){ sphereRef.current.rotation.y = elapsedTime / 6};
	});
	return (
		<>
			{/* <ambientLight intensity={1} /> */}
			<pointLight color="white" position={[2, 0, 3]} intensity={10} />
			<Stars
				radius={300}
				depth={60}
				count={40000}
				factor={7}
				saturation={1}
				fade={true}
			/>
			<mesh ref={sphereRef} position={[0,0,1]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial specularMap={specularMap} />
				<meshStandardMaterial
					map={colorMap}
					normalMap={normalMap}
					metalness={1}
					roughness={0.5}
				/>
				{/* <OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.4}
				/> */}
			</mesh>
		</>
	);
}

export default Sphere;
