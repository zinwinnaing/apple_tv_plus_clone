import React from "react";
import styles from "./AppSection.module.scss";
import { Row, Col } from "react-simple-flex-grid";
import classNames from "classnames";

const AppSection = () => {
  return (
    <div className={styles.appSectionDiv}>
      <Row className={classNames(styles.row, "mx-4")}>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
          lg={{ span: 6, order: 1 }}
          xl={{ span: 6, order: 1 }}
        >
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
          xs={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
          lg={{ span: 6, order: 2 }}
          xl={{ span: 6, order: 2 }}
          className={styles.textCol}
        >
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <div className={styles.logo}></div>
            </div>

            <p className={classNames(styles.header, "text-center")}>
              Bundle Apple TV+ with
              <br /> up to five other great services.
              <br />
              And enjoy more for less.
            </p>
            <div className="text-center">
              <a className={styles.linkBtn}>
                <span>Try Apple On free*</span>
              </a>
            </div>
            <div className="text-center mt-4">
              <a className={styles.link}>
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AppSection;
