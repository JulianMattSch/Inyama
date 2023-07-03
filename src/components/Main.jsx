import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StockTable from './StockTable'
import OrderForm from './OrderForm'
import OrderList from './OrderList'
import '../css/StockTable.css'

const MainComponent = () => {
  const customers = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Brown',
    'David Wilson'
  ]

  const stock = useSelector(state => state.stock)
  const orders = useSelector(state => state.order)
  const dispatch = useDispatch()

  const [selectedType, setSelectedType] = useState('Plain Biltong')
  const [selectedWeight, setSelectedWeight] = useState(100)
  const [customerName, setCustomerName] = useState('')

  const handleOrder = () => {
    const itemStock = stock[selectedType].stock
    const itemWeight = selectedWeight
    const newStock = {
      ...stock,
      [selectedType]: {
        ...stock[selectedType],
        stock: itemStock - itemWeight
      }
    }
    dispatch({ type: 'UPDATE_STOCK', payload: newStock })

    const order = {
      item: selectedType,
      weight: itemWeight,
      customer: customerName,
      price: calculateOrderPrice(selectedType, itemWeight)
    }
    dispatch({ type: 'ADD_ORDER', payload: order })

    setSelectedWeight(100)
    setCustomerName('')
  }

  const handleDeleteOrder = index => {
    const deletedOrder = orders[index]
    const updatedStock = {
      ...stock,
      [deletedOrder.item]: {
        ...stock[deletedOrder.item],
        stock: stock[deletedOrder.item].stock + deletedOrder.weight
      }
    }
    dispatch({ type: 'UPDATE_STOCK', payload: updatedStock })

    const updatedOrders = [...orders]
    updatedOrders.splice(index, 1)
    dispatch({ type: 'SET_ORDERS', payload: updatedOrders })
  }

  const calculateOrderPrice = (itemType, itemWeight) => {
    console.log('itemType', itemType)
    const itemPrice = stock[itemType].price
    const totalPrice = (itemWeight / 1000) * itemPrice
    return totalPrice.toFixed(2)
  }

  return (
    <div className='container'>
      <StockTable stock={stock} />
      <OrderForm
        stock={stock}
        customers={customers}
        handleOrder={handleOrder}
        setSelectedType={setSelectedType}
        calculateOrderPrice={calculateOrderPrice}
      />
      <OrderList
        orders={orders}
        handleDeleteOrder={handleDeleteOrder}
        calculateOrderPrice={calculateOrderPrice}
      />
    </div>
  )
}

export default MainComponent
