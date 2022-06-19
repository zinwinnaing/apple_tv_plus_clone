import React from "react";
import Header from "../Header/Header";
import WhiteButton from "../WhiteButton/WhiteButton";
import styles from "./HeaderSection.module.scss";
const HeaderSection = () => {
  return (
    <div className={styles.headerBackground}>
      <div>
        <div className={styles.headerSectionWapper}>
          <Header className={styles.title}>
            <span>
              All Apple Originals. <br />
            </span>
            <span>Only on Apple TV+.</span>
          </Header>

          <WhiteButton label="Stream now" className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
