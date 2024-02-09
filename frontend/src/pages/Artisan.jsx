import React from 'react'
import { useParams } from 'react-router-dom'

export default function Artisan() {
    const { artisanId } = useParams()

  return (
    <h1>Artisan : {artisanId} </h1>
  )
}
