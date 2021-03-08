import React, { useState } from 'react'
import PropTypes from 'prop-types'
 import { StepTwo } from '../utils/schema' 
import Button from '../smartComponents/Button'
import Input from '../smartComponents/Input'

const SecondStep = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({})
  // handle onchange

  const handleNextOfKin = ({ target }) => {
    setUser({
      type: 'STEP_02',
      payload: { [target.name]: target.value },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = StepTwo(user)
    setErrors(errors)
    if (Object.keys(errors).length > 0) return

    setStep(step + 1) 
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <Input
        type="email"
        label="E-mail"
        name="email"
        value={user.stepTwo.email}
        onChange={(e) => handleNextOfKin(e)}
        error={errors.email}
      />
      <Input
        type="text"
        label="Password"
        name="password"
        value={user.stepTwo.password}
        onChange={(e) => handleNextOfKin(e)}
        error={errors.password}
      />
      <Input
        type="text"
        label="Confirm password"
        name="confirmPassword"
        value={user.stepTwo.confirmPassword}
        onChange={(e) => handleNextOfKin(e)}
        error={errors.confirmPassword}
      />
      <div className="">
        <Button onClick={() => setStep(step - 1)} type="button">
          Back
        </Button>
        <Button type="submit"> Submit</Button>
      </div>
    </form>
  )
}
SecondStep.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
}
export default SecondStep
