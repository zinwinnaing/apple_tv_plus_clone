import AppMusicSection from "../components/AppMusicSection/AppMusicSection";
import AppSection from "../components/AppSection/AppSection";
import AppTVSection from "../components/AppTVSection/AppTVSection";
import DeviceSection from "../components/DeviceSection/DeviceSection";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <DeviceSection />
      <AppSection />
      <AppMusicSection />
      <AppTVSection />
    </div>
  );
}
