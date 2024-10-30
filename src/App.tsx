import { BrowserRouter, Route, Routes } from "react-router-dom";
import Unpaid from "./Unpaid";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unpaid />} />
        <Route path="/Paying" element={<Unpaid />} />
        <Route path="/Paid" element={<Unpaid />} />
      </Routes>
    </BrowserRouter>
  );
}
