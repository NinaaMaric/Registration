import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Completed from "./Final";

const FormSteps = (step, setStep, user, setUser) => [
  {
    title: "Step01",
    content: (
      <FirstStep setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
  {
    title: "Step02",
    content: (
      <SecondStep setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
  {
    title: "Complete",
    content: <Completed user={user} />,
  },
];
export default FormSteps;
