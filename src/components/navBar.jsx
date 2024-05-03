import React, { useState, useEffect } from "react";
import { Navbar, Dropdown, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/react.svg";

const CustomNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // Periksa apakah pengguna telah login dengan memeriksa localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");

    if (token && name) {
      setIsLoggedIn(true);
      setUserName(name);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Hanya dijalankan sekali saat komponen dimuat

  // Fungsi untuk logout dan hapus token dari localStorage
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
    navigate("/login"); // Arahkan ke halaman login setelah logout
  };

  return (
    <Navbar
      style={{
        backgroundImage: "linear-gradient(to right, #001d3d, #98c1d9)",
      }}
      className="gap-5 justify-content-center align-items-center"
      fixed="top"
      expand="lg"
    >
      <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <img src={Logo} alt="React logo" />
      </Navbar.Brand>

      <Navbar.Brand
        style={{
          fontWeight: 600,
          fontSize: "35px",
          cursor: "pointer",
          color: "#ffc300",
        }}
        onClick={() => navigate("/")}
      >
        I-Vent
      </Navbar.Brand>

      <Navbar className="gap-5">
        <Form className="d-flex">
          {/* Konten lainnya */}
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: "#532b88" }}
              id="dropdown-basic"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            type="search"
            placeholder="Cari konser, Judul musik, Artist"
            className="me-2"
            aria-label="Search"
            style={{ width: "50vw" }}
          />

          <Button variant="warning">Search</Button>
        </Form>

        {isLoggedIn ? (
          <>
            <Navbar.Brand style={{ fontWeight: 700 }}>
              {userName} {/* Menampilkan nama pengguna */}
            </Navbar.Brand>
            <Button
              variant="danger"
              onClick={handleLogout} // Tombol logout
            >
              Logout
            </Button>
          </>
        ) : (
          <Navbar.Brand
            style={{ fontWeight: 700, cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Masuk {/* Tampilkan jika belum login */}
          </Navbar.Brand>
        )}
      </Navbar>
    </Navbar>
  );
};

export default CustomNavbar;
