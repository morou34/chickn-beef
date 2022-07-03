import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
// import { css } from "@emotion/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import SpinWheel from "./Components/SpinWheel";



function App() {
  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "auto",
    top: "200px",
    borderColor: "red",
  };
  
  useEffect(() => 
  {
    setLoading(true);
    setTimeout(() => { setLoading(false)}, 2000);
  }, []);

  return  (
    <div className="App">  
    {
        loading ? <PropagateLoader color={"#000000"} loading={loading} cssOverride={override} size={30} />
        :
        <>
          <NavBar />
          {/* <Header /> */}
          <SpinWheel />
        </>
      }
    </div>
  )

}

export default App;
