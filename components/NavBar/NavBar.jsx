import React, { useState } from "react";
import Popup from "./component/Popup";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navBarWapper}>
      <nav className={styles.navBar}>
        <div className="d-flex">
          <a href="#" className={styles.appleLogoLink}>
            <div className={styles.appleLogo}></div>
          </a>
          <a>
            <div className={styles.navLink}>Store</div>
          </a>
          <a>
            <div className={styles.navLink}>Mac</div>
          </a>
          <a>
            <div className={styles.navLink}>iPad</div>
          </a>
          <a>
            <div className={styles.navLink}>iPhone</div>
          </a>
          <a>
            <div className={styles.navLink}>Watch</div>
          </a>
          <a>
            <div className={styles.navLink}>AirPods</div>
          </a>
          <a>
            <div className={styles.navLink}>TV & Home</div>
          </a>
          <a>
            <div className={styles.navLink}>Only on Apple</div>
          </a>
          <a>
            <div className={styles.navLink}>Accessories</div>
          </a>
          <a>
            <div className={styles.navLink}>Support</div>
          </a>
          <a>
            <div className={styles.searchIcon}></div>
          </a>
          <a
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={styles.shoppingIconLink}
          >
            <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
              <div className={styles.shoppingIcon}></div>
            </Popup>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
