import React, { useContext } from "react";
import Button from "../components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../contexts/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="flex flex-col items-center h-screen gap-5 mt-32">
        <h1 className="text-4xl font-semibold text-mygold animate-bouncy">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="w-[60%] bg-mygray py-2 px-1 rounded-lg pl-5"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="w-[60%] bg-mygray py-2 px-1 rounded-lg pl-5"
        />

        <Button px={10} py={2} text="Login" type="submit" />

        <Link to="/register">Need An Account? Signup</Link>
      </div>
    </form>
  );
};

export default Login;
