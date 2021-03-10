import React from 'react'
import './form.css'

const Input = ({ label, error, ...rest }) => {
  return (
    <>
      <label>{label}</label>
      <input {...rest} />
      {error && (
        <div>
          <span > {error}</span>
        </div>
      )}
    </>
  )
}
export default Input
