import classNames from "classnames";
import React, { useState } from "react";
import styles from "./ToggleList.module.scss";

const ToggleList = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <li className={styles.collageList}>
      <h3 className={styles.collageHeader}>
        <button
          className={styles.question}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div className={classNames("text-left", styles.questionText)}>
            {data.question}
          </div>
          <span className={toggle ? styles.downIcon : styles.icon}></span>
        </button>
      </h3>
      <div
        className={classNames(
          toggle ? styles.toggleHeightDiv : styles.toggleHeight,
          styles.answer
        )}
      >
        <p>{data.answer}</p>

        {data?.link && (
          <>
            <a className={styles.linkTag} href="#">
              <span>{data?.link}</span>
            </a>
          </>
        )}
      </div>
    </li>
  );
};
export default ToggleList;
