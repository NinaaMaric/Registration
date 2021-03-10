import React from 'react'

const Button = ({ type, children,  onClick }) => (
  <button type={type} onClick={onClick} >
    {children}
  </button>
)
export default Button
