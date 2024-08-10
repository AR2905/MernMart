import React from 'react'
import ProductDetails from '../product/Component/ProductDetail'
import Navbar from '../Navbar/Navbar'
import AdminProductDetail from '../ADMIN/Component/AdminProductDetail'

const AdminProductDetailsPage = () => {
  return (
    <div>
    <Navbar>
    <AdminProductDetail></AdminProductDetail>

    </Navbar>
    </div>
  )
}

export default AdminProductDetailsPage