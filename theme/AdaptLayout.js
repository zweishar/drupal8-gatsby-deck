import React from 'react'
import logo from './logo.svg'

export default ({ children }) => (
  <section style={{ maxWidth: '80%' }}>
    <img
      src={logo}
      alt="Adapt Logo"
      style={{
        position: 'absolute',
        display: 'block',
        left: '0',
        top: '0',
        margin: '2rem 0 0 2rem',
        background: 'linear-gradient(-90deg,#3cb7c2,#564b9b)',
      }}
    />
    {children}
  </section>
)
