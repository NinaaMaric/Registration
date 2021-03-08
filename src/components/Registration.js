import React, { useReducer, useState } from 'react'
import { UserReducer, DefaultUser } from '../utils/user-reducer'

import FormSteps from './Steps'

const Registration = () => {
  let [step, setStep] = useState(0)
  const [user, setUser] = useReducer(UserReducer, DefaultUser)
  let steps = FormSteps(step, setStep, user, setUser)

  return (
    <div className="">
      <h1>Register User: {steps[`${step}`].title} </h1>
      <h4>
        Step {step + 1}/{steps.length}
      </h4>
      <div className="">{steps[`${step}`].content}</div>
    </div>
  )
}
export default Registration
