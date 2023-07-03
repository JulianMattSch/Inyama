import React from 'react'

const OrderList = ({ orders, handleDeleteOrder, calculateOrderPrice }) => {
  return (
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
              <td>&#8364;{calculateOrderPrice(order.item, order.weight)}</td>
              <td>
                <button onClick={() => handleDeleteOrder(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderList
