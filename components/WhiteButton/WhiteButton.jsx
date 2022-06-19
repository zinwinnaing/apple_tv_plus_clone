import React from "react";
import styles from "./WhiteButton.module.scss";
import classNames from "classnames";
const WhiteButton = ({ label, className }) => {
  return (
    <div>
      <button className={classNames(styles.whitBtn, className)}>{label}</button>
    </div>
  );
};

export default WhiteButton;
