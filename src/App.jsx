import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Penggunaan Router
import LoginForm from "./pages/loginForm"; // Import komponen halaman login
import RegisterForm from "./pages/registerForm"; // Import komponen halaman login
import LandingPage from "./pages/landingPage"; // Import komponen halaman beranda
import NotFound from "./pages/notFound"; // Import komponen halaman tidak ditemukan
import ProtectedRoute from "./components/protectedRoute"; // Import komponen ProtectedRoute
import RedirectRoute from "./components/redirectRoute"; // Impor RedirectRoute

const App = () => {
  const [loginResponse, setLoginResponse] = useState(null); // State untuk menyimpan respons login
  const [registerResponse, setRegisterResponse] = useState(null); // State untuk menyimpan respons register

  const handleLogin = (response) => {
    setLoginResponse(response); // Simpan respons login
    console.log("Login successful. User data:", response);
  };

  const handleRegister = (response) => {
    setRegisterResponse(response); // Simpan respons register
    console.log("Register successful. User data:", response);
  };

  return (
    <>
      <Router>
        <Routes>
          {/* Gunakan RedirectRoute untuk mencegah akses ke halaman login jika sudah login */}
          <Route
            path="/login"
            element={
              <RedirectRoute>
                <LoginForm onLogin={handleLogin} />
              </RedirectRoute>
            }
          />
          <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<RegisterForm onRegister={handleRegister} />}
          />

          {/* ProtectedRoute untuk halaman yang membutuhkan login */}
          {/* <Route
            path="/"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          /> */}

          {/* Route untuk halaman tidak ditemukan */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
