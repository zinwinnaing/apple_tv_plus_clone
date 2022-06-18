import AppMusicSection from "../components/AppMusicSection/AppMusicSection";
import AppSection from "../components/AppSection/AppSection";
import AppTVSection from "../components/AppTVSection/AppTVSection";
import DeviceSection from "../components/DeviceSection/DeviceSection";

export default function Home() {
  return (
    <div>
      <DeviceSection />
      <AppSection />
      <AppMusicSection />
      <AppTVSection />
    </div>
  );
}
