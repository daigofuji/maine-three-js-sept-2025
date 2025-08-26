import { Canvas } from '@react-three/fiber'

function Cube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry />
      <meshLambertMaterial color="#ff6b9d" />
    </mesh>
  )
}

export default function SimpleCube() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <directionalLight position={[-1, 0, 1]} intensity={1} />
        <Cube />
      </Canvas>
    </div>
  )
}
