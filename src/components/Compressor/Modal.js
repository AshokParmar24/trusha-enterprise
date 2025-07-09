import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
 
const Model = (props) => {
  const { nodes, materials } = useGLTF("/medais/old_air_compressor.glb");

  // State for active shape to animate
  const [activeShape, setActiveShape] = useState(1);

  // State for mouse movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update the mouse position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1, // Map to [-1, 1] range
        y: -(event.clientY / window.innerHeight) * 2 + 1, // Map to [-1, 1] range
      });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // List of mesh IDs and their corresponding geometry from GLTF
  const shapes = [
    { node: nodes.Object_2, id: 1 },
    { node: nodes.Object_3, id: 2 },
    { node: nodes.Object_4, id: 3 },
    { node: nodes.Object_5, id: 4 },
    { node: nodes.Object_6, id: 5 },
    { node: nodes.Object_7, id: 6 },
    { node: nodes.Object_8, id: 7 },
    { node: nodes.Object_9, id: 8 },
    { node: nodes.Object_10, id: 9 },
    { node: nodes.Object_11, id: 10 },
    { node: nodes.Object_12, id: 11 },
    { node: nodes.Object_13, id: 12 },
  ];

  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.936, -5.97, 4.904]}
        rotation={[-0.14, -1.292, 3.058]}
      >
        {shapes.map(({ node, id }) => (
          <Mesh
            key={id}
            node={node}
            material={materials.compressor_Material_u1_v1}
            isActive={activeShape === id}
            mousePosition={mousePosition} // Pass mouse position to each mesh
          />
        ))}
      </group>
    </group>
  );
};

// Mesh component to handle individual meshes with animations and mouse rotation
function Mesh({ node, material, isActive, mousePosition }) {
  // Fix the rotationX (up/down rotation) and only allow rotation on Y (left-right)
  const rotationX = 0; // Set a constant value to disable up/down rotation
  const rotationY = mousePosition.x * Math.PI; // Scale mouse X to rotation

  return (
    <motion.mesh
      castShadow
      receiveShadow
      geometry={node.geometry}
      material={material}
      animate={{
        rotateX: rotationX, // Fixed rotationX
        rotateY: rotationY, // Dynamic rotationY based on mouse.x
      }}
    />
  );
}

useGLTF.preload("/medais/old_air_compressor.glb");

export default Model;
