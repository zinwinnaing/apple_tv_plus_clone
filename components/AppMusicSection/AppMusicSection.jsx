import React from "react";
import styles from "./AppMusicSection.module.scss";
import { Row, Col } from "react-simple-flex-grid";
import classNames from "classnames";

const AppMusicSection = () => {
  return (
    <div className={styles.appSectionDiv}>
      <Row className={classNames(styles.row, "mx-4")}>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
          className={styles.textCol}
        >
          <div>
            <p className={classNames(styles.header, "text-left")}>
              The Apple Music Student <br />
              Plan comes with <br />
              Apple TV+ for Free.<sup>3</sup>
            </p>
            <div className="text-center">
              <a className={styles.linkBtn}>
                <span>Try Apple Music free</span>
              </a>
            </div>
          </div>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
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
      </Row>
    </div>
  );
};

export default AppMusicSection;
