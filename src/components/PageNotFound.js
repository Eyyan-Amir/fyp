import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const Animation = () => {
	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.y += 0.005));

	const texture = useLoader(TextureLoader, require(`../assets/images/earth.jpg`).default);
	const outerTexture = useLoader(TextureLoader, require(`../assets/images/texture2.jpg`).default);
	return (
		<mesh position={[0, -0.5, 0]} rotation={[0.8, 10, 0]} ref={mesh}>
			<sphereGeometry args={[1.4, 30, 30]} attach='geometry' />
			<meshPhongMaterial attach='material' map={texture} bumpMap={outerTexture} bumpScale={0.3} />
		</mesh>
	);
};

const myStyle = { position: "relative", width: `100%`, height: `100vh`, background: "black", overflow: "hidden" };

export const PageNotFound = () => {
	useEffect(() => {
		const gsap = window.gsap;
		let tl = gsap.timeline();
		tl.fromTo(
			".pageNotFound canvas",
			2,
			{
				opacity: 0,
			},
			{ opacity: 1 }
		);
		tl.fromTo(
			".pageNotFound h3",
			2,
			{
				autoAlpha: 0,
			},
			{ autoAlpha: 1, delay: -1.5 }
		);
	});
	return (
		<div className='pageNotFound' style={myStyle}>
			<Canvas camera={{ position: [0, 0, 4] }}>
				<OrbitControls minDistance={4} maxDistance={9} dampingFactor={0.03} rotateSpeed={0.6} />
				<Stars />
				<ambientLight intensity={0.3} />
				<pointLight color='0xffffff' intensity={0.9} position={[5, 3, 5]} />
				<Suspense fallback={null}>
					<Animation />
				</Suspense>
			</Canvas>
			<h1>404</h1>
			<h3>Page not Found : (</h3>
		</div>
	);
};
