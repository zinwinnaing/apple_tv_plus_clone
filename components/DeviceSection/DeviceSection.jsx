import classNames from "classnames";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
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
  const streamDevice1 = [
    {
      id: 1,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_samsung__er6s8sp9t126_large.jpg",
    },
    {
      id: 2,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_lg__7fxn3l0zf5ua_large.jpg",
    },
    {
      id: 3,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_vizio__crgnno5ezt2e_large.jpg",
    },

    {
      id: 4,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_sony__dv28xq4n91ea_large.jpg",
    },
    {
      id: 5,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg",
    },
  ];
  const streamDevice2 = [
    {
      id: 6,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_roku__d3kr4gpcimoi_large.jpg",
    },
    {
      id: 7,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_firetv__f6qpefrj0ree_large.jpg",
    },

    {
      id: 8,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_xbox__cfelmbxxfoaa_large.jpg",
    },
    {
      id: 9,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_google_tv__e5t4asdc2gsy_large.jpg",
    },
    {
      id: 10,
      src: "https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_playstation__djtq2b40wf2a_large.jpg",
    },
  ];
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
        <h2 className={styles.header}>
          Watch Apple&nbsp;TV+ anywhere <br />
          on the Apple&nbsp;TV&nbsp;app.
        </h2>
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
          delay={100}
        />
        <Device
          label="iPhone"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_iphone__c914mkstye0y_large.jpg"
          delay={200}
        />
        <Device
          label="iPad"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_ipad__cyk6qow5fiqa_large.jpg"
          delay={300}
        />
        <Device
          label="Mac"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_mac__b7y797p7oouq_large.jpg"
          delay={400}
        />
        <Device
          label="AirPlay"
          src="https://www.apple.com/v/apple-tv-plus/aa/images/overview/icon_airplay__ddkvcm0sxtm6_large.jpg"
          delay={500}
        />
      </div>
      <div>
        <p className={classNames("text-center", styles.streamDevice)}>
          See it on your smart&nbsp;TV&nbsp; <br />
          or&nbsp;streaming&nbsp;device.
        </p>
        <ul className={styles.listList}>
          <li>
            <a
              href="https://support.apple.com/guide/tvplus/welcome/web"
              className="icon-wrapper typography-body"
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
    </div>
  );
};

export default DeviceSection;
