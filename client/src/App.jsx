import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>Ptt Marval Land</h1>
      <ul>
        {/* <li>
          <Link to={""}>精選文章</Link>
        </li> */}
        <li>
          <Link to={"articles"}>文章列表</Link>
        </li>
        {/* <li>
          <Link to={}>收藏文章</Link>
        </li>
        <li>
          <Link to={}>會員資訊</Link>
        </li> */}
        <li>
          <Link to={"login"}>登出</Link>
        </li>
      </ul>
    </>
  );
}
