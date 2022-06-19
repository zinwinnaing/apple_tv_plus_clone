import classNames from "classnames";
import React from "react";
import styles from "./Header.module.scss";
const Header = ({ children, className }) => {
  return <h2 className={classNames(styles.header, className)}>{children}</h2>;
};

export default Header;
