import classNames from "classnames";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { streamDevice1, streamDevice2 } from "../../data/data";
import Header from "../Header/Header";
import QuestionAndAnswer from "../QuestionAndAnswer/QuestionAndAnswer";
import styles from "./DeviceSection.module.scss";

const DeviceSection = () => {
  const Device = ({ src, label, delay }) => {
    return (
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        delay={delay}
        animateOnce={true}
      >
        <div className={styles.appleIcon}>
          <div className={styles.appleIconWapper}>
            <img src={src} alt="logo" className={styles.logo} />
            <div className="text-center">
              <span>{label}</span>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    );
  };

  return (
    <div className={styles.deviceSection}>
      <div className={styles.logoDiv}>
        <img
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/apple_tv_app_icon__cth1s5qlqpyu_large.png"
          alt="logo"
          className={styles.logo}
        />
      </div>
      <div className="text-center">
        <Header>
          Watch Apple&nbsp;TV+ anywhere <br />
          on the Apple&nbsp;TV&nbsp;app.
        </Header>
        <p className={styles.typography}>
          Find the Apple&nbsp;TV&nbsp;app on your favorite Apple devices. <br />
          Or&nbsp;watch Apple&nbsp;TV+ online at&nbsp;
          <a
            href="https://tv.apple.com/"
            data-analytics-exit-link=""
            data-analytics-title="watch online at tv.apple.com"
          >
            tv.apple.com
          </a>
          .
        </p>
      </div>

      <div className={classNames(styles.deviceList)}>
        <Device
          label="Apple TV"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_apple_tv__r2nel0gcigam_large.jpg"
          delay={50}
        />
        <Device
          label="iPhone"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_iphone__c914mkstye0y_large.jpg"
          delay={100}
        />
        <Device
          label="iPad"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_ipad__cyk6qow5fiqa_large.jpg"
          delay={150}
        />
        <Device
          label="Mac"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_mac__b7y797p7oouq_large.jpg"
          delay={200}
        />
        <Device
          label="AirPlay"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_airplay__ddkvcm0sxtm6_large.jpg"
          delay={250}
        />
      </div>
      <div className={styles.streamDeviceListSection}>
        <p className={classNames("text-center", styles.streamDevice)}>
          See it on your smart&nbsp;TV&nbsp; <br />
          or&nbsp;streaming&nbsp;device.
        </p>
        <ul className={styles.listList}>
          <li>
            <a
              href="https://support.apple.com/guide/tvplus/welcome/web"
              className="icon-wrapper typography-boady"
            >
              <span>Set up your device</span>
              <span className={styles.icon}></span>
            </a>
          </li>
          <li>
            <a
              href="/apple-tv-app/devices/"
              data-analytics-title="explore compatible devices"
              aria-label="explore compatible devices"
              className="icon-wrapper typography-body"
              data-analytics-exit-link=""
            >
              <span className="icon-copy">Explore compatible devices</span>
              <span className="icon icon-after more"></span>
            </a>
          </li>
        </ul>
        <div className={styles.streamDeviceList}>
          {streamDevice1.map((d) => {
            return (
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                delay={100 + d?.id * 100}
                animateOnce={true}
                key={d?.id}
              >
                <div className={styles.appleIconWapper}>
                  <img
                    src={d?.src}
                    alt="stream_device"
                    className={styles.channelIcon}
                  />
                </div>
              </AnimationOnScroll>
            );
          })}
        </div>
        <div className={styles.streamDeviceList}>
          {streamDevice2.map((d, i) => {
            return (
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                delay={500 + i * 100}
                animateOnce={true}
                key={d?.id}
              >
                <div className={styles.appleIconWapper}>
                  <img
                    src={d?.src}
                    alt="stream_device"
                    className={styles.channelIcon}
                  />
                </div>
              </AnimationOnScroll>
            );
          })}
        </div>
      </div>
      <QuestionAndAnswer />
    </div>
  );
};

export default DeviceSection;
