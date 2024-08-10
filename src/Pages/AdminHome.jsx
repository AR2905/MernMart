import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductList from '../product/Component/ProductList'
import AdminProductList from '../ADMIN/Component/AdminProductList'
import Footer from '../common/Footer'

const AdminHome = () => {
  return (
    <div>
      <Navbar>
        <AdminProductList>
            
        </AdminProductList>
      </Navbar>
      <Footer></Footer>

      
    </div>
  )
}

export default AdminHome
