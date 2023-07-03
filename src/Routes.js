import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StockTable from './components/StockTable'
import OrderForm from './components/OrderForm'
import OrderList from './components/OrderList'

const ReactRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<StockTable />} />
      <Route path='/order-form' element={<OrderForm />} />
      <Route path='/order-list' element={<OrderList />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default ReactRoutes
