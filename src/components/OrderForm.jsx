import React, { useState } from 'react'

const OrderForm = ({ stock, customers, handleOrder, calculateOrderPrice }) => {
  const [selectedType, setSelectedType] = useState('Plain Biltong')
  const [selectedWeight, setSelectedWeight] = useState(100)
  const [customerName, setCustomerName] = useState('')

  return (
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
        <div>{calculateOrderPrice(selectedType, selectedWeight)}</div>
        <button type='button' onClick={handleOrder}>
          Create Order
        </button>
      </form>
    </div>
  )
}

export default OrderForm
