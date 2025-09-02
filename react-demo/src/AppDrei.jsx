import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Billboard, Text, GizmoHelper, GizmoViewport } from '@react-three/drei';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <Billboard
          position={[0, 2, 0]} // Default: [0, 0, 0]
        >
          <Text fontSize={1}>Static text</Text>
        </Billboard>
        <OrbitControls />
        {/* Presets: sunset|forest|city|dawn|night|park|lobby|studio etc.
        https://drei.docs.pmnd.rs/staging/environment */}
        <Environment preset="sunset" />
        <mesh rotation={[0.4, 0.4, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#ff6b9d" metalness={0.7} roughness={0.2} />
        </mesh>
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport />
        </GizmoHelper>
      </Canvas>
    </div>
  )
}

export default App
