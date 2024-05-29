import React from 'react'
import ReusableCanvas from '../../components/canvas'
import CubeScene from '../../components/canvas/components/cubescene'

export default function Home() {
  return (
    <div>
      <ReusableCanvas>
        <CubeScene />
      </ReusableCanvas>
    </div>
  )
}
