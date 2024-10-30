import Footer from "../../../../components/footer/Footer";
import Sermon from "../../../../components/navigation/semons/sermon/Sermon";
export default function Page({ params }) {
  const slug = decodeURIComponent(params.slug);
  return (
    <div>
      <Sermon slug={slug} />
      <Footer />
    </div>
  );
}
