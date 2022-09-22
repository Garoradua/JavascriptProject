import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import App from "./App";
// import data from "./data";
// import data2 from "./data2";
// import Table from "./DataTable";
// import Table2 from "./DataTable2";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./styles.css";

  const container= document.getElementById('root');
const root = createRoot(container); 
root.render(
  <React.StrictMode>

    
    <App />
  </React.StrictMode>,

);

//   const clickhandler = name => console.log("delete", name);

//   // return (
//   //   <div className="App">
//   //     <h1 >Toll Management Portal </h1>
//   //     <h2>Task Assigned to Gourav Arora</h2>
//   //     {/* <Table data={data} click={clickhandler} /> */}
//   //     {/* <Table2 data={data2} click={clickhandler} /> */}
//   //   </div>
//   // );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
