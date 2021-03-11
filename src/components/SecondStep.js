import React, { useState } from "react";
import PropTypes from "prop-types";
import { StepTwo } from "../utils/schema";
import Button from "./smartComponents/Button";
import Input from "./smartComponents/Input";
import { t } from "react-switch-lang";
import Eye from "../img/eye.png";
import Modal from "./Modal";
import Swal from 'sweetalert2';

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
    setAgree(!agree);
    return new Promise((resolve, reject) => {
      if (Object.keys(errors).length > 0) {
        setTimeout(() => {
          reject(console.log('Error'))
        }, 250);
      }else {
        setTimeout(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: t('secondStep.message'),
            showConfirmButton: false,
            timer: 1500
          })
          resolve(setStep(step + 1))
        }, 200);
      }
    })
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
          <img src={Eye} alt="eye" />
        </span>
      </div>
      <div className={`form-monk-group ${ errors.confirmPassword !== "" ? "" : "errors"}`}
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
          <img src={Eye} alt="eye" />
        </span>
      </div>

       <div className="terms-check">
        <div className="wrapp">
          <p className="terms-modal" onClick={() => setShow(true)}>
            {t("secondStep.terms")}
          </p>
          <input
            type="checkbox"
            name="checkbox"
            value={user.stepTwo.checkbox}
            onChange={(e) => handleStepTwo(e)}
            style={{ height: "20px" }}
          />
        </div>
        {errors.checkbox && (
          <div>
            <span>{errors.checkbox}</span>
          </div>
        )}
      </div>
      <Modal show={show} setShow={setShow} />

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
