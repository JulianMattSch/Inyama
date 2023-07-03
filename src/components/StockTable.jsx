import React, { useState } from 'react'
import '../css/StockTable.css'

const StockTable = () => {
  const [stock, setStock] = useState({
    'Plain Biltong': { stock: 1000, price: 50 },
    'Chilli Biltong': { stock: 1000, price: 50 },
    'Chilli Bites': { stock: 1000, price: 55 },
    'Plain Droe Wors': { stock: 1000, price: 55 },
    'Chilli Droe Wors': { stock: 1000, price: 55 },
    'Boerewors - Plain': { stock: 1000, price: 13 },
    'Boerewors - Cheese': { stock: 1000, price: 15 },
    'Boerewors - Chilli': { stock: 1000, price: 15 },
    'Boerewors - Red Pepper & Ginger': { stock: 1000, price: 15 },
    'Boerewors - Thin': { stock: 1000, price: 13 }
  })

  const [orders, setOrders] = useState([])
  const [selectedType, setSelectedType] = useState('Plain Biltong')
  const [selectedWeight, setSelectedWeight] = useState(100)
  const [customerName, setCustomerName] = useState('')

  const customers = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Brown',
    'David Wilson'
  ]

  const handleOrder = () => {
    const itemStock = stock[selectedType].stock
    const newStock = {
      ...stock,
      [selectedType]: {
        ...stock[selectedType],
        stock: itemStock - selectedWeight
      }
    }
    setStock(newStock)

    const order = {
      item: selectedType,
      weight: selectedWeight,
      customer: customerName,
      price: calculateOrderPrice(selectedType, selectedWeight)
    }
    setOrders([...orders, order])

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
    setStock(updatedStock)

    const updatedOrders = [...orders]
    updatedOrders.splice(index, 1)
    setOrders(updatedOrders)
  }

  const calculateOrderPrice = (itemType, itemWeight) => {
    const itemPrice = stock[itemType].price
    const totalPrice = (itemWeight / 1000) * itemPrice
    return totalPrice.toFixed(2)
  }

  return (
    <div className='container'>
      <div className='section'>
        <h2>Stock Table</h2>
        <table className='stock-table'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price per kilo (&#8364;)</th>
              <th>Available Stock (g)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(stock).map(([itemName, itemData]) => (
              <tr key={itemName}>
                <td>{itemName}</td>
                <td>&#8364;{itemData.price}</td>
                <td>{itemData.stock}g</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='section'>
        <h2>Create Order</h2>
        <form className='order-form'>
          <div className='form-group'>
            <label htmlFor='type'>Type:</label>
            <select
              id='type'
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
            >
              {Object.keys(stock).map(itemName => (
                <option key={itemName} value={itemName}>
                  {itemName}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight:</label>
            <input
              type='number'
              id='weight'
              value={selectedWeight}
              min='100'
              step='50'
              onChange={e => setSelectedWeight(parseInt(e.target.value))}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='customerName'>Customer:</label>
            <select
              id='customerName'
              value={customerName}
              onChange={e => setCustomerName(e.target.value)}
            >
              <option value=''>Select a customer</option>
              {customers.map(customer => (
                <option key={customer} value={customer}>
                  {customer}
                </option>
              ))}
            </select>
          </div>
          <button type='button' onClick={handleOrder}>
            Create Order
          </button>
        </form>
      </div>

      <div className='section'>
        <h2>Orders</h2>
        <table className='orders-table'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Weight (g)</th>
              <th>Customer Name</th>
              <th>Price (&#8364;)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.item}</td>
                <td>{order.weight}g</td>
                <td>{order.customer}</td>
                <td>&#8364;{order.price}</td>
                <td>
                  <button onClick={() => handleDeleteOrder(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StockTable
