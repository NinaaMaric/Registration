export const DefaultUser = {
    firstName: '',
    lastName: '',
    username: '',
    stepTwo: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  }
  
  export const UserReducer = (user, { type, payload }) => {
    switch (type) {
      case 'STEP_01':
        return {
          ...user,
          ...payload,
        }
      case 'STEP_02':
        return {
          ...user,
          stepTwo: {
            ...user.stepTwo,
            ...payload,
          },
        }
  
      default:
        return user
    }
  }
  