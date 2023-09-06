import { Link, Outlet } from "react-router-dom";

export default function ArticlesListPage() {
  return (
    <>
      <Link to={"/"}>back to home</Link>
      <h2>ArticlesListPage</h2>
      <ul>
        <li>
          <Link to={`1111111111111`}>1111111111111</Link>
        </li>
        <li>
          <Link to={`222222222222`}>222222222222</Link>
        </li>
        <li>
          <Link to={`333333333333`}>333333333333</Link>
        </li>
        <li>
          <Link to={`444444444444`}>444444444444</Link>
        </li>
        <li>
          <Link to={`555555555555`}>555555555555</Link>
        </li>
      </ul>

      <div id="article">
        <Outlet />
      </div>
    </>
  );
}
