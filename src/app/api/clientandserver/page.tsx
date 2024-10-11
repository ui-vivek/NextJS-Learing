import React from 'react'
import ButtonComp from './buttonComp/page'

const ClientAndServer = () => {
  return (
    <div>
      <h1>This page is server side but also use the client side rendering.</h1>
      <ButtonComp num="50" />
    </div>
  )
}

export default ClientAndServer
