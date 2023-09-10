import { useParams, useOutletContext } from "react-router-dom";

export default function ArticleDetailPage() {
  const { articleId } = useParams();
  const props = useOutletContext(); // just try props
  return (
    <>
      <hr />
      <h2>ArticleDetailPage </h2>
      <h3>Article id: {articleId}</h3>
      <span>author: {props.author}</span>
    </>
  );
}
