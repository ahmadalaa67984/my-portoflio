import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

// Animated rotating sphere in the center
const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.002;
      sphereRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        wireframe
        emissive="#2155CD"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Instanced animated particles
const Particles = ({ count = 2000 }) => {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      t: Math.random() * 100,
      factor: 20 + Math.random() * 100,
      speed: 0.01 + Math.random() / 200,
      xFactor: -50 + Math.random() * 100,
      yFactor: -50 + Math.random() * 100,
      zFactor: -50 + Math.random() * 100,
    }));
  }, [count]);

  useFrame(() => {
    particles.forEach((p, i) => {
      p.t += p.speed / 2;
      const a = Math.cos(p.t) + Math.sin(p.t * 1) / 10;
      const b = Math.sin(p.t) + Math.cos(p.t * 2) / 10;
      const s = Math.max(1.5, Math.cos(p.t) * 5);

      dummy.position.set(
        (p.xFactor + a) * 10,
        (p.yFactor + b) * 10,
        (p.zFactor + a) * 10
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 10, 10]} />
      <meshBasicMaterial color="#5786F5" />
    </instancedMesh>
  );
};

// Random stars in a spherical layout
const Stars = ({ count = 5000 }) => {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 100;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" sizeAttenuation />
    </points>
  );
};

// GLTF model loader
const Model = ({ url, ...props }) => {
  const { scene } = useGLTF(url);
  // Enable shadow casting and receiving for all meshes in the model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={scene} {...props} />;
};

// Main 3D background canvas
const Background3D = () => {
  const [modelY, setModelY] = React.useState(-5);

  React.useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage (0 at top, 1 at bottom)
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      // Map scroll percent to Y position (e.g., from -5 to 5)
      setModelY(-5 + scrollPercent * 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas
      className="background-canvas"
      camera={{ position: [0, 0, 20], fov: 75 }}
      dpr={[1, 2]}
      shadows
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
        physicallyCorrectLights: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
    >
      <fog attach="fog" args={["#1a237e", 15, 50]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} castShadow />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.5}
        castShadow
        color={"#2196f3"}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <directionalLight
        position={[-10, -10, 5]}
        intensity={1.2}
        color={"#ff9800"}
      />
      <Model url="/old_computers.glb" position={[0, modelY, 0]} scale={1.5} />
      {/* <AnimatedSphere /> */}
      <Particles />
      <Stars />
    </Canvas>
  );
};

export default Background3D;
