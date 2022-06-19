import React from "react";
import styles from "./Popup.module.scss";
import classNames from "classnames";

const Popup = ({ isOpen, setIsOpen, children }) => {
  return (
    <div>
      <div className={classNames(styles.popup)}>
        {children}
        <div className={classNames(styles.popuptext, isOpen && styles.show)}>
          <div className={styles.text}>You Bug is empty</div>
          <div className={styles.popuptextList}>
            <ul>
              <li>
                <span>Bag</span>
              </li>
              <li>
                <span>Save Item</span>
              </li>
              <li>
                <span>Order</span>
              </li>
              <li>
                <span>Account</span>
              </li>
              <li>
                <span>Sign in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
