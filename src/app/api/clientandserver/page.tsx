import React from 'react'
import ButtonComp from './buttonComp/page'
//We used client component inside server component
const ClientAndServer = () => {
  return (
    <div>
      <h1>This page is server side but also use the client side rendering.</h1>
      <h2>We used client component inside server component.</h2>
      <ButtonComp num="50" />
    </div>
  )
}

export default ClientAndServer
