import React from "react";
import { Navigate } from "react-router-dom";

const redirectRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Periksa token di local storage

  if (token) {
    return <Navigate to="/" />; // Arahkan ke halaman beranda jika sudah login
  }

  return children; // Jika belum login, tampilkan konten yang diinginkan
};

export default redirectRoute;
