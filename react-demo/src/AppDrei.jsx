import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <OrbitControls />
        <Environment preset="forest" />
        <mesh rotation={[0.4, 0.4, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#ff6b9d" metalness={0.7} roughness={0.2} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
