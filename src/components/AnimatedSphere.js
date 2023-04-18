import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere(){
    return (
        <Sphere visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
                color="#4169E1"
                attach="material"
                distort={0.8}
                speed={1}
                roughness={1}
            />
        </Sphere>
    );
}