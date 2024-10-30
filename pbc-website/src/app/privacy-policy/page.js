import Footer from "../../../components/footer/Footer";
import LgAppBar from "../../../components/navigation/LgAppBar";
import PrivacyPolicy from "../../../components/privacy-policy/PrivacyPolicy";

export default function Page() {
  return (
    <div>
      <LgAppBar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
