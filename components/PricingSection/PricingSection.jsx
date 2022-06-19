import React from "react";
import styles from "./PricingSection.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classNames from "classnames";
import WhiteButton from "../WhiteButton/WhiteButton";
import { Row, Col } from "react-simple-flex-grid";

const Header = ({ children, className }) => {
  return (
    <h2 className={classNames(styles.textHeader, className)}>{children}</h2>
  );
};

const PricingCard = ({ title, subTitle, content, label }) => {
  return (
    <div>
      <div>
        <h2 className={classNames("text-white my-2", styles.cardSubHeader)}>
          {title}
        </h2>
        <h1 className={classNames("text-white my-3 ", styles.cardHeader)}>
          {subTitle}
        </h1>
        <p className={classNames("text-white", styles.cardText)}>{content}</p>
        <WhiteButton label={label}></WhiteButton>
      </div>
    </div>
  );
};
const PricingSection = () => {
  return (
    <div className={styles.pricingSectionWapper}>
      <div className={styles.pricingSection}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={50}
          animateOnce={true}
        >
          <Header className="text-white mt-0">
            <span>New Apple Originals every month.</span>
          </Header>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={100}
          animateOnce={true}
        >
          <Header className="text-white">
            <span>Stream on the Apple TV app on Apple</span>
            <br />
            <span>devices,smart TVs, consoles, or sticks.</span>
          </Header>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={200}
          animateOnce={true}
        >
          <Header className="text-white mb-0">
            <span>Share Apple TV+ with your family.</span>
          </Header>
        </AnimationOnScroll>

        <Row className={styles.pricingCardRow}>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-5">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={50}
              animateOnce={true}
            >
              <PricingCard
                title="Buy an Apple device"
                subTitle="3 months free."
                content="Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.1"
                label="Check eligibility"
              />
            </AnimationOnScroll>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-5">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={100}
              animateOnce={true}
            >
              <PricingCard
                title="Free 7-day trial"
                subTitle="$4.99/mo."
                content="A monthly subscription is just $4.99 per month after a free 7-day trial. Share Apple TV+ with your family."
                label="Try is free"
              />
            </AnimationOnScroll>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-5">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={150}
              animateOnce={true}
            >
              <PricingCard
                title="Free 1‑month trial"
                content="Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less."
                subTitle="Apple One"
                label="Try Apple One free*"
              />
            </AnimationOnScroll>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default PricingSection;
