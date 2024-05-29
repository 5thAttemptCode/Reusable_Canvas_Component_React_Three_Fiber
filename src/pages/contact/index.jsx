import React from 'react'
import ReusableCanvas from '../../components/canvas'
import TorusScene from '../../components/canvas/components/torusScene'

export default function Contact() {
  return (
    <div>
      <ReusableCanvas>
        <TorusScene />
      </ReusableCanvas>
    </div>
  )
}
