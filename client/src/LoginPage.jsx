import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const onLogin = () => navigate("/");

  return (
    <>
      <h1>Login</h1>
      <button onClick={onLogin}>Login</button>
    </>
  );
}
