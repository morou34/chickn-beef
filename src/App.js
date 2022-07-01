import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";

function App() {
  const [loading, setLoading] = useState(false);

  const override = css`
  display:block;
  border-color:red;
  margin-top:20%;
  `;
  useEffect(() => 
  {
    setLoading(true);
    setTimeout(() => { setLoading(false)}, 2000);
  }, []);

  return  (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#97c039"} loading={loading} css= {override} size={40} />
        :
        <>
          <NavBar />
          <Header />
        </>
      }
    </div>
  )

}

export default App;
