import OurPeople from "../../../../components/navigation/about/our-people/OurPeople";
import LgAppBar from "../../../../components/navigation/LgAppBar";
import Footer from "../../../../components/footer/Footer";

export default function page() {
  return (
    <div style={{ backgroundColor: "#DFF5D0" }}>
      <LgAppBar />
      <OurPeople />
      <Footer />
    </div>
  );
}
