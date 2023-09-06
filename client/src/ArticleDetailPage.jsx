import { useParams } from "react-router-dom";

export default function ArticleDetailPage() {
  const { articleId } = useParams();
  return (
    <>
      <hr />
      <h2>ArticleDetailPage </h2>
      <h3>Article id: {articleId}</h3>
    </>
  );
}
