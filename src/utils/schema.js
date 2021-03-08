
export const StepOne = (values) => {
    let errors = {}
    if (!values.firstName) {
      errors.firstName = 'First name is required'
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required'
    }
    if (!values.username) {
      errors.username = 'Phone number is required'
    }
   
    return errors
  }
  
  export const StepTwo = (values) => {
      console.log(values.stepTwo.email);
      console.log(values.stepTwo.password);
    let errors = {}
    if (!values.stepTwo.email) {
      errors.email = 'Email address is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/) {
      errors.email = 'Email address is invalid'
    } 
    if (!values.stepTwo.password) {
      errors.password = 'Password is required'
    } else if ('') {
      errors.password = 'Password must contain ...'
    } 
    if (!values.stepTwo.confirmPassword) {
      errors.confirmPassword = 'Password address is required'
    } else if (values.stepTwo.password !== values.stepTwo.confirmPassword) {
      errors.confirmPassword = 'Password must be the same'
    } 
  
    return errors
  }
  
  