import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Completed from "./Final";
import {t} from 'react-switch-lang';

const FormSteps = (step, setStep, user, setUser) => [
  {
    title: t('registration.step01'),
    content: (
      <FirstStep setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
  {
    title: t('registration.step02'),
    content: (
      <SecondStep setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
  {
    title: t('registration.complete'),
    content: <Completed user={user} />,
  },
];
export default FormSteps;
