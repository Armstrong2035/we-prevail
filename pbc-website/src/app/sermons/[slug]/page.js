import Sermon from "../../../../components/navigation/semons/sermon/Sermon";
export default function Page({ params }) {
  const slug = decodeURIComponent(params.slug);
  return <Sermon slug={slug} />;
}
