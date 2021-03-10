import { t } from "react-switch-lang";

export const StepOne = (values) => {
  console.log(values);

  let errors = {};
  if (!values.firstName) {
    errors.firstName = t("schema.stepOne.fnameReq");
  } else if (values.firstName.trim().length < 3) {
    errors.firstName = t("schema.stepOne.min3");
  } else if (values.firstName.trim().length > 50) {
    errors.firstName = t("schema.stepOne.max50");
  }
  if (!values.lastName) {
    errors.lastName = t("schema.stepOne.lNameReq");
  } else if (values.lastName.trim().length < 3) {
    errors.lastName = t("schema.stepOne.min3");
  } else if (values.lastName.trim().length > 50) {
    errors.lastName = t("schema.stepOne.max50");
  }
  if (!values.username) {
    errors.username = t("schema.stepOne.usernameReq");
  } else if (values.username.trim().length < 3) {
    errors.username = t("schema.stepOne.min3");
  } else if (values.username.trim().length > 50) {
    errors.username = t("schema.stepOne.max50");
  }

  return errors;
};

export const StepTwo = (values) => {
  console.log(values);
  let errors = {};
  if (!values.stepTwo.email) {
    errors.email = t("schema.stepTwo.emailReq");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/) {
    errors.email = t("schema.stepTwo.emailInv");
  }
  if (!values.stepTwo.password) {
    errors.password = t("schema.stepTwo.passReq");
  } else if (!/^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/) {
    errors.password = t("schema.stepTwo.passValidation");
  }
  if (!values.stepTwo.confirmPassword) {
    errors.confirmPassword = t("schema.stepTwo.passReq");
  } else if (values.stepTwo.password !== values.stepTwo.confirmPassword) {
    errors.confirmPassword = t("schema.stepTwo.confPass");
  }
  if (!values.stepTwo.checkbox) {
    errors.checkbox = t("schema.stepTwo.terms");
  }

  return errors;
};
