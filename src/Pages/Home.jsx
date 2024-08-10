/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import ProductList from '../product/Component/ProductList'
import Footer from '../common/Footer'

const Home = () => {

  return (
    <div>
      <Navbar>
        <ProductList>
            
        </ProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  )
}

export default Home
