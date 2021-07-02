import React, { useState } from "react";
import { Link } from "react-router-dom";

import { registerUser } from "../api/authApi";

function Register({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        email: email,
        password: password,
        userName: userName,
      });

      setEmail("");
      setPassword("");
      setUserName("");
      setIsLoggedIn(true);
      console.log({ email, password, userName });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-2  overflow-x-hidden">
        <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold bg-white">Register a account</h1>
          </div>
          <form action="#" className="bg-white" onSubmit={handleRegister}>
            <div className="mt-5 bg-white">
              <label for="userName" className="bg-white">
                Username
              </label>
              <input
                type="text"
                id="userName"
                className="block w-full p-2 border rounded border-gray-500 bg-white"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mt-5 bg-white">
              <label for="email" className="bg-white">
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
              <label for="password" className="bg-white">
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
                disabled={!email || !password || !userName}
              >
                Register
              </button>
            </div>
            <Link to="/login">
              Already have a account? <span className="underline">Login</span>{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
