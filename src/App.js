import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <div className="container">
      <EmployeeComponent></EmployeeComponent>
    </div>
  );
}

export default App;
