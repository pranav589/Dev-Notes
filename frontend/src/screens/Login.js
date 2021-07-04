import React, { useState } from "react";
import { Link } from "react-router-dom";

import { loginUser } from "../api/authApi";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email: email,
        password: password,
      });
      setEmail("");
      setPassword("");
      localStorage.setItem("token_store", response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-2 ">
        <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold bg-white">Login</h1>
          </div>
          <form action="#" className="bg-white" onSubmit={handleLogin}>
            <div className="mt-5 bg-white">
              <label htmlFor="email" className="bg-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full p-2 border rounded border-gray-500 bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5 bg-white">
              <label htmlFor="password" className="bg-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full p-2 border rounded bg-white border-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full cursor-pointer"
                disabled={!email || !password}
              >
                Login
              </button>
            </div>
            <Link to="/register">
              Don't have a account? <span className="underline">Register</span>{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
