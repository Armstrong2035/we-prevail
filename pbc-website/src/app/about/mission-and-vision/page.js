import Footer from "../../../../components/footer/Footer";
import PbcMissionAndVision from "../../../../components/navigation/about/mission-and-vision/MissionAndVision";
import LgAppBar from "../../../../components/navigation/LgAppBar";

export default function page() {
  return (
    <div style={{ backgroundColor: "#F1FAEE" }}>
      <LgAppBar />
      <PbcMissionAndVision />;
      <Footer />
    </div>
  );
}
