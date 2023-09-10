import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

// just try child component, make sure 
// curstom component begin with an uppercase letter
const NotFound = () => {
  return <p>你搞事吧！</p>
}

export default function ArticlesListPage() {
  const articleListDict = {
    "1": { title: "文章1", author: "小明" },
    "2": { title: "文章2", author: "小黃" },
    "3": { title: "文章3", author: "小王" },
    "4": { title: "文章4", author: "小美" },
    "5": { title: "文章5", author: "小智" },
  }
  const { articleId } = useParams();
  return (
    <>
      <Link to={"/"}>back to home</Link>
      <h2>ArticlesListPage</h2>
      <ul>
        {/* just try rendering lists & handling style  */}
        {Object.keys(articleListDict).map((articleId) => (
          <li key={articleId} style={{ color: (articleId % 2) > 0 ? 'red': 'blue' }}>
            <Link to={articleId}>{articleListDict[articleId].title}</Link>
          </li>
        ))}
      </ul>

      <div id="article">
        {/* just try props */}
        { articleListDict[articleId] ? <Outlet context={articleListDict[articleId]} /> : `找不到文章 id: ${articleId}` } 
        {/* just try conditional rendering and logical && syntax: */}
        { !articleListDict[articleId] && <NotFound /> }
      </div>
    </>
  );
}
