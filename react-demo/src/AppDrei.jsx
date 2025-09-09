import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Sky,
  Stars,
  GizmoHelper,
  GizmoViewport,
  Grid,
  Stats,
  Billboard,
  Text,
} from '@react-three/drei';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        {/* Controls */}
        <OrbitControls />
        {/* Instead of lights, use Presets: sunset|forest|city|dawn|night|park|lobby|studio etc.
        https://drei.docs.pmnd.rs/staging/environment */}
        <Environment preset="sunset" />
        {/* Enable Stars or Sky (or both) */}
        <Stars />
        <Sky />
        {/* Add an onClick event to mesh */}
        <mesh rotation={[0.4, 0.4, 0]} onClick={() => alert('Clicked!')}>
          <boxGeometry />
          <meshStandardMaterial color="#ff6b9d" metalness={0.7} roughness={0.2} />
        </mesh>
        {/* Add helpers, shows stats, grids, and gizmos */}
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport />
        </GizmoHelper>
        <Stats />
        <Grid
          position={[0, -2, 0]} // Default: [0, 0, 0]
          args={[10, 10]} // Default: [10, 10]
          cellSize={1} // Default: 1
        />
        {/* Example of using Text, then billboard */}
        <Text fontSize={0.5} position={[0, 2, 0]}>Hello world!</Text>
        <Billboard
          position={[0, 3, 0]} // Default: [0, 0, 0]
          follow={true} // Default: true
        >
          <Text fontSize={0.5}>Static text goes here</Text>
        </Billboard>
      </Canvas>
    </div>
  )
}

export default App
