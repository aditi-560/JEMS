import { createStore } from 'redux'
import ReactImg from 'src/assets/images/react.jpg'

const initialProducts = [
  {
    id: 1,
    name: 'Sample Product 1',
    category: 'Category A',
    price: '$99.99',
    photo: ReactImg,
    seo: 'sample, tags',
  },
  {
    id: 2,
    name: 'Sample Product 2',
    category: 'Category B',
    price: '$149.99',
    photo: ReactImg,
    seo: 'sample, tags',
  },
  {
    id: 3,
    name: 'Sample Product 3',
    category: 'Category A',
    price: '$49.99',
    photo: ReactImg,
    seo: 'sample, tags',
  },
]

const initialState = {
  sidebarShow: true,
  theme: 'light',
  products: initialProducts,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'ADD_PRODUCT': {
      const newId = state.products.length > 0 ? Math.max(...state.products.map((p) => p.id)) + 1 : 1
      const newProduct = { ...rest.product, id: newId, photo: ReactImg }
      return {
        ...state,
        products: [...state.products, newProduct],
      }
    }
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === rest.product.id ? rest.product : product,
        ),
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== rest.productId),
      }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
