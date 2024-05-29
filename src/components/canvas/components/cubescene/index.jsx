import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'


export default function CubeScene() {

  const boxSize = 2.5

  const boxRef = useRef()
  
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01
    }
  })
  
  return (
    <>
      <mesh ref={boxRef}>
        <boxGeometry args={[ boxSize, boxSize, boxSize ]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  )
}
