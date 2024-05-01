import React, { useState } from "react";
import LoginForm from "./pages/loginForm"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import NotFound from "./pages/notFound";

const App = () => {
  const [loginResponse, setLoginResponse] = useState(null);

  const handleLogin = (response) => {
    setLoginResponse(response);
    console.log("Login successful. User data:", response);
  };  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
