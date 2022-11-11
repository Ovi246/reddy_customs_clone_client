import React, { useContext } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "./../contexts/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={handleSignUp}>
      <div className="flex flex-col items-center h-screen gap-5 mt-32">
        <h1 className="text-4xl font-semibold text-mygold animate-bouncy">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="name"
          className="w-[60%] bg-mygray py-2 px-1 rounded-lg pl-5"
        />
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

        <Button px={10} py={2} text="Signup" type="submit" />
        <Link to="/login">Already Registerd? Login</Link>
      </div>
    </form>
  );
};

export default Register;
