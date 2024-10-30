import { Container } from "@mui/material";
import SermonList from "../../../components/navigation/sermons/sermonList";
import Footer from "../../../components/footer/Footer";

export default async function page() {
  return (
    <div>
      <SermonList />
      <Footer />
    </div>
  );
}
