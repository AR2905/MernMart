import React from 'react'
import ProductDetails from '../product/Component/ProductDetail'
import Navbar from '../Navbar/Navbar'
import Footer from '../common/Footer'

const ProductDetailsPage = () => {
  return (
    <div>
    <Navbar>
    <ProductDetails></ProductDetails>

    </Navbar>
    <Footer></Footer>

    </div>
  )
}

export default ProductDetailsPage