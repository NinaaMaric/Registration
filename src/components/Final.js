import React from "react";
import PropTypes from "prop-types";
import { t } from "react-switch-lang";

const Completed = ({ user }) => (
  <div className="final">
    <p>
      {t("final.welcome")}, <b>{`${user.firstName} ${user.lastName}`}</b>!
    </p>
    <p>
      {t("final.username")}: <b>{`${user.username}`}</b> <br/><br/>
      {t("final.email")}: <b>{`${user.stepTwo.email}`}</b>
    </p>
  </div>
);

Completed.propTypes = {
  user: PropTypes.object,
};
export default Completed;
