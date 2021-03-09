import React, { useState } from "react";
import PropTypes from "prop-types";
import { StepTwo } from "../utils/schema";
import Button from "../smartComponents/Button";
import Input from "../smartComponents/Input";
import { t } from "react-switch-lang";

const SecondStep = ({ step, setStep, user, setUser }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  // handle onchange
  const handleStepTwo = ({ target }) => {
    setUser({
      type: "STEP_02",
      payload: { [target.name]: target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = StepTwo(user);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStep(step + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        label={t("secondStep.email")}
        name="email"
        value={user.stepTwo.email}
        onChange={(e) => handleStepTwo(e)}
        error={errors.email}
      />
     
      <Input
        type={passwordShown ? "text" : "password"}
        label={t("secondStep.pass")}
        name="password"
        value={user.stepTwo.password}
        onChange={(e) => handleStepTwo(e)}
        error={errors.password}
      /> <i className="show-hide" onClick={togglePasswordVisiblity}>Show/hide</i>
     
      <Input
        type={passwordShown2 ? "text" : "password"}
        label={t("secondStep.confirmPass")}
        name="confirmPassword"
        value={user.stepTwo.confirmPassword}
        onChange={(e) => handleStepTwo(e)}
        error={errors.confirmPassword}
      /> <i className="show-hide" onClick={togglePasswordVisiblity2}>Show/hide</i>
      
      <div className="btn-group">
        <Button onClick={() => setStep(step - 1)} type="button">
          {t("secondStep.back")}
        </Button>
        <Button type="submit"> {t("secondStep.submit")} </Button>
      </div>
    </form>
  );
};
SecondStep.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
};
export default SecondStep;
