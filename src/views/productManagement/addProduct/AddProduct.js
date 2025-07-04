import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
} from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const ProductAdd = () => {
  const [product, setProduct] = useState({ name: '', category: '', price: '', seo: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    setProduct({ ...product, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_PRODUCT', product: product })
    alert('Product added successfully!')
    navigate('/product-management/list')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add New Product</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Product Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  placeholder="Enter product name"
                  onChange={handleChange}
                  value={product.name}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="category">Category</CFormLabel>
                <CFormInput
                  type="text"
                  id="category"
                  placeholder="Enter category"
                  onChange={handleChange}
                  value={product.category}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="price">Price</CFormLabel>
                <CFormInput
                  type="text"
                  id="price"
                  placeholder="Enter price"
                  onChange={handleChange}
                  value={product.price}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="productImage">Product Photo</CFormLabel>
                <CFormInput type="file" id="productImage" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="seo">SEO Tags</CFormLabel>
                <CFormTextarea
                  id="seo"
                  rows="3"
                  placeholder="Enter SEO tags, separated by commas"
                  onChange={handleChange}
                  value={product.seo}
                ></CFormTextarea>
              </div>
              <CButton type="submit" color="primary">
                Submit
              </CButton>
              <CButton as={Link} to="/product-management/list" color="secondary" className="ms-2">
                Cancel
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductAdd 