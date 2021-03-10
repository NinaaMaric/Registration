import React, { useState } from "react";
import PropTypes from "prop-types";
import { StepOne } from "../utils/schema";
import Input from "./smartComponents/Input";
import Button from "./smartComponents/Button";
import Loader from "react-loader-spinner";
import {t} from 'react-switch-lang';
import "./register.css"

const FirstStep = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  
  const handleStepOne = ({ target }) => {
    setUser({
      type: "STEP_01",
      payload: { [target.name]: target.value },
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    
    const errors = StepOne(user);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return
    setIsLoading(true)
    setStep(step + 1);
    
  };

  return (
    <>
      {isLoading ? (
         <Loader
         type="TailSpin"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={2000} //2 secs
       />
      ) : (
        <form onSubmit={handleContinue}>
          <Input
            type="text"
            name="firstName"
            value={user.firstName}
            label={t('firstStep.fName')}
            onChange={(e) => handleStepOne(e)}
            error={errors.firstName}
          />
          <Input
            type="text"
            name="lastName"
            value={user.lastName}
            label={t('firstStep.lName')}
            onChange={(e) => handleStepOne(e)}
            error={errors.lastName}
          />
          <Input
            type="text"
            label={t('firstStep.username')}
            name="username"
            value={user.username}
            onChange={(e) => handleStepOne(e)}
            error={errors.username}
          />
          <Button type="submit"> {t('firstStep.next')} </Button>
        </form>
      )}
    </>
  );
};

FirstStep.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
};
export default FirstStep;
