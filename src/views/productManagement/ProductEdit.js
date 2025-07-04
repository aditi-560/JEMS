import React, { useState, useEffect } from 'react'
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
  CAvatar,
} from '@coreui/react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReactImg from 'src/assets/images/react.jpg'

const ProductEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const productToEdit = useSelector((state) =>
    state.products.find((p) => p.id === parseInt(id)),
  )

  const [product, setProduct] = useState(null)
  const [productImage, setProductImage] = useState(null)

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit)
    }
  }, [productToEdit])

  const handleChange = (e) => {
    const { id, value } = e.target
    setProduct({ ...product, [id]: value })
  }

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const newImage = URL.createObjectURL(e.target.files[0])
      setProductImage(newImage)
      setProduct({ ...product, photo: newImage })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'UPDATE_PRODUCT', product: product })
    alert('Product saved successfully!')
    navigate('/product-management/list')
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Edit Product #{id}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Product Name</CFormLabel>
                <CFormInput type="text" id="name" value={product.name} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="category">Category</CFormLabel>
                <CFormInput
                  type="text"
                  id="category"
                  value={product.category}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="price">Price</CFormLabel>
                <CFormInput type="text" id="price" value={product.price} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <CFormLabel>Current Photo</CFormLabel>
                <div>
                  <CAvatar src={productImage || product.photo} size="xl" />
                </div>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="productImage">Change Photo</CFormLabel>
                <CFormInput type="file" id="productImage" onChange={handleImageChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="seo">SEO Tags</CFormLabel>
                <CFormTextarea
                  id="seo"
                  rows="3"
                  value={product.seo}
                  onChange={handleChange}
                ></CFormTextarea>
              </div>
              <CButton type="submit" color="primary">
                Save Changes
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

export default ProductEdit 