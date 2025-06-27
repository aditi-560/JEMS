import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilCart,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilLibrary,
  cilMoney,
  cilTags,
  cilApplicationsSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Product Managment',
    to: '/base',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Product List',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Add Product',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Category',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Orders',
    to: '/base',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Orders',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Pending Orders',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Delivered Orders',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Return Orders',
        to: '/base/carousels',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Customers',
    to: '/base',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Customer List',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Customer Feedback / Reviews',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Analytics / Reports',
    to: '/base',
    icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sales Overview',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Product Performance',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Customer Insights',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Order Trends',
        to: '/base/carousels',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Discounts & Promotions',
    to: '/base',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Coupons / Vouchers',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Seasonal Offers',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: ' Invoices / Billing',
    to: '/base',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Invoice Generator',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Billing History',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: ' Content Management',
    to: '/base',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Homepage Banners',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Featured Products',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Blogs / Articles',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Admin Management',
    to: '/base',
    icon: <CIcon icon={cilApplicationsSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User Roles & Permissions',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Activity Logs',
        to: '/base/breadcrumbs',
      },
    ],
  },
]

export default _nav
