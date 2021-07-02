import { useState, useEffect } from "react";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { verifyUser } from "./api/authApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("token_store");
      if (token) {
        const verified = await verifyUser({
          headers: { Authorization: token },
        });

        console.log(verified);
        setIsLoggedIn(verified.data);
        if (!verified.data) return localStorage.clear();
      } else {
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn ? <Redirect to="/login" /> : <Home />}
        </Route>
        <Route path="/login">
          {isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          )}
        </Route>
        <Route path="/register">
          {isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <Register setIsLoggedIn={setIsLoggedIn} />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
