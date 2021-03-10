import React, { useState } from "react";
import PropTypes from "prop-types";
import { StepTwo } from "../utils/schema";
import Button from "./smartComponents/Button";
import Input from "./smartComponents/Input";
import { t } from "react-switch-lang";
import Eye from "../img/eye.png";
import Modal from "./Modal";

const SecondStep = ({ step, setStep, user, setUser }) => {
  const [agree, setAgree] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  const handleStepTwo = ({ target }) => {
    setUser({
      type: "STEP_02",
      payload: { [target.name]: target.value || target.checked },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = StepTwo(user);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setAgree(!agree);
    setStep(step + 1);
  };

  console.log(errors);
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
      <div
        className={`form-monk-group ${errors.passowrd !== "" ? "" : "error"}`}
      >
        <Input
          type={passwordShown ? "text" : "password"}
          label={t("secondStep.pass")}
          name="password"
          value={user.stepTwo.password}
          onChange={(e) => handleStepTwo(e)}
          error={errors.password}
        />
        <span className="show-hide" onClick={togglePasswordVisiblity}>
          <img src={Eye} alt="" />
        </span>
      </div>
      <div
        className={`form-monk-group ${
          errors.confirmPassword !== "" ? "" : "error"
        }`}
      >
        <Input
          type={passwordShown2 ? "text" : "password"}
          label={t("secondStep.confirmPass")}
          name="confirmPassword"
          value={user.stepTwo.confirmPassword}
          onChange={(e) => handleStepTwo(e)}
          error={errors.confirmPassword}
        />
        <span className="show-hide" onClick={togglePasswordVisiblity2}>
          <img src={Eye} alt="" />
        </span>
      </div>


      <p className="terms-modal" onClick={() => setShow(true)}>{t("secondStep.terms")}</p>
      <Modal show={show} setShow={setShow} />


      <Input
        type="checkbox"
        name="checkbox"
        value={user.stepTwo.checkbox}
        onChange={(e) => handleStepTwo(e)}
        error={errors.checkbox}
        style={{ height: "20px" }}
      />

      <div className="btn-group">
        <Button onClick={() => setStep(step - 1)} type="button">
          {t("secondStep.back")}
        </Button>
        <Button type="submit">{t("secondStep.submit")}</Button>
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
