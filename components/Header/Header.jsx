import React from "react";
import styles from "./Header.module.scss";
const Header = ({ children }) => {
  return <h2 className={styles.header}>{children}</h2>;
};

export default Header;
