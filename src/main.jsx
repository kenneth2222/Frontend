import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import SponsorSignup from "./components/SponsorSignup";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SponsorSignup />} />
   

      </Routes>
    </Router>
  </React.StrictMode>
);
