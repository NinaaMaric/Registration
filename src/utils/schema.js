import { t } from "react-switch-lang"

export const StepOne = (values) => {
    let errors = {}
    if (!values.firstName) {
      errors.firstName = t('schema.stepOne.fnameReq')
    }
    if (!values.lastName) {
      errors.lastName = t('schema.stepOne.lNameReq')
    }
    if (!values.username) {
      errors.username = t('schema.stepOne.usernameReq')
    }
   
    return errors
  }
  
  export const StepTwo = (values) => {
      console.log(values.stepTwo.email);
      console.log(values.stepTwo.password);
    let errors = {}
    if (!values.stepTwo.email) {
      errors.email = t('schema.stepTwo.emailReq')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/) {
      errors.email = t('schema.stepTwo.emailInv')
    } 
    if (!values.stepTwo.password) {
      errors.password = t('schema.stepTwo.passReq')
    } else if ('') {
      errors.password = 'Password must contain ...'
    } 
    if (!values.stepTwo.confirmPassword) {
      errors.confirmPassword = t('schema.stepTwo.passReq')
    } else if (values.stepTwo.password !== values.stepTwo.confirmPassword) {
      errors.confirmPassword = t('schema.stepTwo.confPass')
    } 
  
    return errors
  }
  
  