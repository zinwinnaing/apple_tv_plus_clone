import PricingSection from "../components/PricingSection/PricingSection";
import AppMusicSection from "../components/AppMusicSection/AppMusicSection";
import AppSection from "../components/AppSection/AppSection";
import AppTVSection from "../components/AppTVSection/AppTVSection";
import DeviceSection from "../components/DeviceSection/DeviceSection";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import NavBar from "../components/NavBar/NavBar";
import styles from "./home.module.scss";
export default function Home() {
  return (
    <div>
      <div className={styles.mainNav}>
        <NavBar />
      </div>
      <HeaderSection />
      <PricingSection />
      <DeviceSection />
      <AppSection />
      <AppMusicSection />
      <AppTVSection />
    </div>
  );
}
