import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FVP } from './components/FPV'

function App() {
  return (
    <Canvas>
      <FVP />
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <Physics>
        <Ground />
      </Physics>
    </Canvas>
  )
}

export default App
