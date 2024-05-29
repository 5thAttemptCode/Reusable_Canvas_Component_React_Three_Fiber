import React from 'react'
import ReusableCanvas from '../../components/canvas'
import SphereScene from '../../components/canvas/components/sphereScene'

export default function About() {
  return (
    <div>
      <ReusableCanvas>
        <SphereScene />
      </ReusableCanvas>
    </div>
  )
}
