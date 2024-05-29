import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'


export default function SphereScene() {

  const sphereRef = useRef()
  const [ direction, setDirection ] = useState(1) // 1 for right, -1 for left
  const speed = 0.01

  useFrame(() => {
    if (sphereRef.current) {
      // Update position
      sphereRef.current.position.x += speed * direction
      
      // Reverse direction at limits
      if (sphereRef.current.position.x > 1) {
        setDirection(-1)
      } else if (sphereRef.current.position.x < -1) {
        setDirection(1)
      }
    }
  })
  
  return (
    <>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[ 2, 32, 16 ]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  )
}
