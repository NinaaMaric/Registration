import React, { useReducer, useState } from 'react'
import { t } from 'react-switch-lang'
import { UserReducer, DefaultUser } from '../utils/user-reducer'
import FormSteps from './Steps'

const Registration = () => {
  let [step, setStep] = useState(0)
  const [user, setUser] = useReducer(UserReducer, DefaultUser)
  let steps = FormSteps(step, setStep, user, setUser)

  return (
    <div className="form-register">
      <h1>{t('registration.user')} </h1>
      <h4>{t('registration.step')} {step + 1}/{steps.length}</h4>
      <div>{steps[`${step}`].content}</div>
    </div>
  )
}
export default Registration
