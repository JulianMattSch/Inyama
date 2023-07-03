import React from 'react'

import logo from '../assets/images/logo.jpg'
import '../css/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <img
          src={logo}
          width={120}
          alt='logo'
          style={{ marginRight: '10px' }}
        />
        <div>
          <h2 style={{ fontWeight: 'bold', margin: 0 }}>INYAMA</h2>
          <span> BILTONG AND MEATS</span>
        </div>
      </div>
    </div>
  )
}

export default Header
