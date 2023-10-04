import React from "react";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuoteSharePage from "./Components/QuoteSharePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/quote-share-page" Component={QuoteSharePage} />
      </Routes>
    </Router>
  );
}

export default App;
