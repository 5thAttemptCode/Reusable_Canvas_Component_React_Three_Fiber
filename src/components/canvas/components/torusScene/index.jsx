import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'


export default function TorusScene() {

  const torusRef = useRef()
  
  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.01
    }
  })

  return (
    <>
      <mesh ref={torusRef}>
        <torusGeometry args={[ 1.5, 0.5, 16, 100 ]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  )
}
