import React from "react";
import styles from "./WhiteButton.module.scss";
const WhiteButton = ({ label }) => {
  return (
    <div>
      <button className={styles.whitBtn}>{label}</button>
    </div>
  );
};

export default WhiteButton;
