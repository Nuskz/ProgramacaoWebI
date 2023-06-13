import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import { EmployesPage } from "./Pages/Employees";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employees" element={<EmployesPage />} />
      </Routes>
    </BrowserRouter>
  );
}