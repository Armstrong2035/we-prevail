import LgAppBar from "../../../components/navigation/LgAppBar";
import Giving from "../../../components/giving/Giving";
import Footer from "../../../components/footer/Footer";

export default function page() {
  return (
    <div style={{ backgroundColor: "#F1FAEE", height: "100%" }}>
      <LgAppBar />
      <Giving />
      <Footer />
    </div>
  );
}
