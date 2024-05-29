import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'


export default function ReusableCanvas({ height = "100vh", width = "100%", children }) {

  const ambientLight = useMemo(() => <ambientLight />, [])
  const directionalLight = useMemo(() => <directionalLight />, [])
  // the lights are created with useMemo ensuring they are 
  // only created once and reused across renders

  return (
    <div className='canvas' style={{ height: height, width: width }}>
      <Canvas>
        {ambientLight}
        {directionalLight}
        {children}
      </Canvas>
    </div>
  )
}

// The Canvas from R3F adjust its size to its parent element. I set the size of the parentelement
// as a prop and added default size. By this the component can be seamlessly integrated 
// in fx dashboards or grid-designs