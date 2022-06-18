import React from "react";
import styles from "./AppTVSection.module.scss";
import { Row, Col } from "react-simple-flex-grid";
import classNames from "classnames";

const AppTVSection = () => {
  return (
    <div className={styles.appSectionDiv}>
      <Row gutter={40} className={classNames(styles.row, "mx-4")}>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
          className={styles.appleTvCol}
        >
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <div className={styles.logo}></div>
            </div>

            <p className={classNames(styles.header, "text-center")}>
              A higher definition of TV.
            </p>

            <div className="text-center mt-4 ">
              <button className={classNames(styles.buyBtn, "mr-4")}>Buy</button>
              <a className={styles.link}>
                <span>Learn More</span>
              </a>
            </div>
          </div>
          <div
            className={classNames(
              "d-flex justify-content-center align-items-center",
              styles.imgDivWapper
            )}
          >
            <div className={styles.imgDiv}></div>
          </div>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
          className={styles.textCol}
        >
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <div className={styles.logo}></div>
            </div>

            <p className={classNames(styles.header, "text-center")}>
              Bring Apple TV+ to
              <br />a screen near you.
            </p>

            <div className="text-center mt-4">
              <a className={styles.link}>
                <span>Learn More</span>
              </a>
            </div>
            <div
              className={classNames(
                "d-flex justify-content-center align-items-center",
                styles.imgDivWapper
              )}
            >
              <div className={styles.imgDiv2}></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AppTVSection;
