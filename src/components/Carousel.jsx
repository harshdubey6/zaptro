import React, { use, useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

const Carousel = () => {
     const {fetchAllProducts} = useContext(DataContext)
  return (
    <div>Carousel</div>
  )  
}

export default Carousel