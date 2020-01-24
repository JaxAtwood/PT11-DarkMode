import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Crypto from "./components/Crypto";

import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing}/>
      <Route exact path="/crypto" component={Crypto} />
    </div>
  );
};

export default App;