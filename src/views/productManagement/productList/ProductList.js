import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CAvatar,
  CFormSelect,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import ReactImg from 'src/assets/images/react.jpg'

const initialProducts = [
  { id: 1, name: 'Sample Product 1', category: 'Category A', price: '$99.99', photo: ReactImg },
  { id: 2, name: 'Sample Product 2', category: 'Category B', price: '$149.99', photo: ReactImg },
  { id: 3, name: 'Sample Product 3', category: 'Category A', price: '$49.99', photo: ReactImg },
]

const ProductList = () => {
  const allProducts = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(allProducts.map((p) => p.category))]

  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory)

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch({ type: 'DELETE_PRODUCT', productId: productId })
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Product List</strong>
            <div className="d-flex align-items-center">
              <CFormSelect
                className="me-2"
                style={{ width: '200px' }}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </CFormSelect>
              <CButton as={Link} to="/product-management/add" size="sm">
                Add Product
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <p>Here is a list of your products.</p>
            {/* Replace with actual product list */}
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <CAvatar src={product.photo} />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <CButton
                        as={Link}
                        to={`/product-management/edit/${product.id}`}
                        size="sm"
                        color="primary"
                      >
                        Edit
                      </CButton>{' '}
                      <CButton size="sm" color="danger" onClick={() => handleDelete(product.id)}>
                        Delete
                      </CButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductList
