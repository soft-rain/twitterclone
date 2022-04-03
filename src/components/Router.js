import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../router/Auth";
import Home from "../router/Auth";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route exact path={"/"} element={<Home />} />
        ) : (
          <Route exact path={"/"} element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
