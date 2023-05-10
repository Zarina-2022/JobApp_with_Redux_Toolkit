import React from "react";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import JobList from "./pages/jobList";
import AddJob from "./pages/addJob";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
