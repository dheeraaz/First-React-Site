import React from 'react'
import { Products } from '../Components';


function Services() {

  return (
    <div className="container">
      <Products sliceFrom = {0} SliceTo={9} title={"Our Products"}/>
    </div>
  )
}

export default Services