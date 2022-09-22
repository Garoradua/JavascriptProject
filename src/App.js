
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./data";
import data2 from "./data2";
import Table from "./DataTable";
import Table2 from "./DataTable2";
import AddVehicle from "./AddVehicle";

import AddToll from "./AddToll";
function App() {
  const clickhandler = name => console.log("delete", name);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Table data={data} click={clickhandler}/>} />
        <Route exact path="/tolllist" element={<Table2 data={data2} click={clickhandler}/>} />
        <Route exact path="/addvehicle" element={<AddVehicle/>} />
       
       
        <Route exact path="/addtoll" element={<AddToll/>} />
       {/* <Route path="/register" element={<Register />} /> */}
{/* 
        <Route path="/dashboard" element={[<Navbar />, <Dashboard />]} />

        <Route
          path="/create_project"
          element={[<Navbar />, <CreateProjectForm />]}
        />

        <Route
          path="/edit_project/"
          element={[<Navbar />, <EditProjectForm />]}
        /> */}

        </Routes>
    </BrowserRouter>
  );
}

export default App;
