import React from "react";
import { Navigate } from "react-router-dom"; // Digunakan untuk redirect
import PropTypes from "prop-types"; // Untuk validasi prop

const protectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Periksa token di local storage

  if (!token) {
    // Jika tidak ada token, arahkan ke halaman login
    return <Navigate to="/login" />;
  }

  // Jika ada token, izinkan akses ke konten yang diinginkan
  return children;
};

protectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validasi prop
};

export default protectedRoute;
