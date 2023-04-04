import * as React from 'react';
import * as THREE from 'three';
import dynamic from 'next/dynamic';
import { useRef, useEffect } from 'react';
import {Suspense} from "react";
import {Canvas, useThree, extend, useFrame} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {Vector3, SkinnedMesh } from "three";

extend({ OrbitControls })

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: any;
        }
    }
}

type GroupProps = JSX.IntrinsicElements['group']

const CameraControls = () => {
    const {
        camera,
        gl: { domElement }
    } = useThree()
    const controlsRef = useRef<OrbitControls>()

    useFrame(() => {
        controlsRef.current?.update()
    })

    return (
         <orbitControls
             attach={"orbitControls"}
             args={[camera, domElement]}
             autoRotate={true}
             autoRotateSpeed={-3} reverseOrbit={true}
             enablePan={false}
             enableDamping={true}
             minPolarAngle={Math.PI/2}
             maxPolarAngle={Math.PI/2}
             ref={controlsRef}
         />
    )
}
interface ModelProps {
    url: string;
    position: Vector3 | GroupProps['position'];
}

function JustinGLB(props: ModelProps) {
    const { url } = props;
    // load model and add it to the scene
    const gltf = useLoader(GLTFLoader, url);
    const  { nodes }  = gltf || {};

    // type casting nodes to properly render three.js model
    const hairMesh = nodes.Wolf3D_Hair as SkinnedMesh;
    const eyeMeshLeft = nodes.EyeLeft as SkinnedMesh;
    const eyeMeshRight = nodes.EyeRight as SkinnedMesh;
    const headMesh = nodes.Wolf3D_Head as SkinnedMesh;

    return(
        <>
            <group {...props} dispose={null}>
                { nodes && (
                    <>
                        <primitive object={nodes.Hips} />
                        <skinnedMesh
                            geometry={hairMesh.geometry}
                            material={hairMesh.material}
                            skeleton={hairMesh.skeleton} />
                        <skinnedMesh name="EyeLeft"
                             geometry={eyeMeshLeft.geometry}
                             material={eyeMeshLeft.material}
                             skeleton={eyeMeshLeft.skeleton}
                             morphTargetDictionary={eyeMeshLeft.morphTargetDictionary}
                             morphTargetInfluences={eyeMeshLeft.morphTargetInfluences}
                        />
                        <skinnedMesh name="EyeRight"
                             geometry={eyeMeshRight.geometry}
                             material={eyeMeshRight.material}
                             skeleton={eyeMeshRight.skeleton}
                             morphTargetDictionary={eyeMeshRight.morphTargetDictionary}
                             morphTargetInfluences={eyeMeshRight.morphTargetInfluences}
                        />
                        <skinnedMesh
                            name="Wolf3D_Head"
                            geometry={headMesh.geometry}
                            material={headMesh.material}
                            skeleton={headMesh.skeleton}
                            morphTargetDictionary={headMesh.morphTargetDictionary}
                            morphTargetInfluences={headMesh.morphTargetInfluences}
                        />
                    </>
                )}
            </group>
        </>

    )
}

export default function Model() {

    // dynamic import of model to avoid SSR issues
    const DynamicModel = dynamic(() => Promise.resolve(JustinGLB), {
        ssr: false
    });


    useEffect(() => {
        // resize canvas to fit container
        const canvasContainer = document.getElementById('canvas-container') ;
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        if(canvasContainer){
            renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
            canvasContainer.appendChild(renderer.domElement);
            window.addEventListener('resize', () => {
                renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
            });
        }

    }, [])

    return (
        <>
            <div id={'canvas-container'} className={'h-[calc(50vh)] w-[calc(40vw)] relative'}>
                <Canvas  camera={{ position: [0.2, 0.6, 8.25], fov: 5 }}  className={''}>
                    <spotLight intensity={0.8} position={[300, 300, 400]} />
                    <Suspense fallback={null}>
                        <DynamicModel url={'/models/model.glb'} position={[0, -1.70, 0]} />
                    </Suspense>
                    <CameraControls />
                </Canvas>
            </div>
        </>
    );
}
