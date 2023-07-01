import React from 'react'
import { useParams } from 'react-router-dom'

export default function Menu() {
  const {type} = useParams();
  
  // console.log(type)
  return (
    <div>Menu {type} </div>
  )
}
