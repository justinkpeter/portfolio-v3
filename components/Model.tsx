import * as React from 'react';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import {Canvas, useThree, extend, useFrame} from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import {Suspense} from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls })

const CameraControls = () => {
    const {
        camera,
        gl: { domElement }
    } = useThree()
    const controlsRef = useRef<OrbitControls>()

    useFrame(() => {
        controlsRef.current?.update()
    })

    // @ts-ignore
    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, domElement]}
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={8}
            reverseOrbit={true}
        />
    )
}
interface ModelProps {
    url: string;
    position: number[];
}

function JustinGLB(props: ModelProps) {
    const { url } = props;
    // load model and add it to the scene
    const gltf = useLoader(GLTFLoader, url);
    const  { nodes }  = gltf || {};
    return(
        <>
            <group {...props} dispose={null}>
                { nodes && (
                    <>
                        <primitive object={nodes.Hips} />
                        <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={nodes.Wolf3D_Hair.material} skeleton={nodes.Wolf3D_Hair.skeleton} />
                        <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={nodes.EyeLeft.material} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
                        <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={nodes.EyeRight.material} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
                        <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={nodes.Wolf3D_Head.material} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
                    </>
                )}
            </group>
        </>

    )
}

export default function Model() {
    const DynamicModel = dynamic(() => Promise.resolve(JustinGLB), {
        ssr: false
    });

    return (
        <>
            <Canvas  camera={{ position: [0, 0, 8.25], fov: 3.3 }}>
                <ambientLight intensity={0.5} />
                <spotLight intensity={0.8} position={[300, 300, 400]} />
                <Suspense fallback={null}>
                    <DynamicModel url={'/models/model.glb'} position={[0, -1.70, 0]} />
                </Suspense>
                <CameraControls />
            </Canvas>
        </>
    );
}
