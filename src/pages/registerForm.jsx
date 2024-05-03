import React, { useState } from "react"; // Tambahkan useState untuk state
import axios from "axios"; // Import axios untuk permintaan HTTP
import styled from "styled-components"; // Import styled-components untuk styling
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js"; // Untuk enkripsi

// Styled components
const PageContainer = styled.div`
  background-color: #080710; /* Warna latar belakang untuk seluruh halaman */
  height: 100vh; /* Tinggi halaman sesuai dengan tinggi layar */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
`;

const FirstShape = styled(Shape)`
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
`;

const LastShape = styled(Shape)`
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -80px;
`;

const Form = styled.form`
  height: 550px;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px 0;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: white;
`;

const Label = styled.label`
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  border: none;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 60%;
  background-color: green;
  border: none;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(149, 213, 178);
  }
`;

const SocialContainer = styled.div`
  margin-top: 30px;
  gap: 20px;
  display: flex;
  justify-content: center;
`;

const SocialButton = styled.div`
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.47);
  }
`;

const Icon = styled.i`
  margin-right: 4px;
`;

const BtnContainer = styled.div`
  padding: "0";
  width: "100%";
`;

const TwoColumnContainer = styled.div`
  display: flex; /* Gunakan flexbox untuk tata letak dua kolom */
  gap: 20px; /* Jarak antara dua kolom */
  justify-content: center;
`;

const registerForm = () => {
  const [name, setName] = useState(""); // Untuk menyimpan nama
  const [email, setEmail] = useState(""); // Untuk menyimpan email
  const [password, setPassword] = useState(""); // Untuk menyimpan kata sandi
  const [phoneNumber, setPhoneNumber] = useState(""); // Untuk nomor telepon
  const [error, setError] = useState(null); // Untuk pesan kesalahan
  const navigate = useNavigate(); // Untuk navigasi setelah registrasi

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload form
    setError(null); // Reset error setiap kali submit

    // Permintaan POST ke endpoint registrasi API
    axios
      .post("http://127.0.0.1:8000/api/auth/register", {
        name,
        email,
        password,
        phone_number: phoneNumber, // Pastikan menggunakan key yang benar
      })
      .then((response) => {
        console.log("API Response:", response.data); // Tambahkan log untuk melihat respons

        console.log("Registration successful");

        navigate("/login"); // Pengalihan setelah berhasil
      })
      .catch((error) => {
        setError("Registration failed. Please check your information.");
        console.error("Registration error:", error);
      });
  };

  return (
    <PageContainer>
      <Background>
        <FirstShape />
        <LastShape />
      </Background>
      <Form onSubmit={handleSubmit}>
        <Title>Register Here</Title>
        <TwoColumnContainer>
          {" "}
          {/* Gunakan dua kolom */}
          <div
            style={{
              width: "100%",
            }}
          >
            {" "}
            {/* Kolom pertama */}
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            {" "}
            {/* Kolom kedua */}
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </TwoColumnContainer>
        <TwoColumnContainer>
          {" "}
          {/* Kolom kedua */}
          <div
            style={{
              width: "100%",
            }}
          >
            {" "}
            {/* Kolom pertama */}
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            {" "}
            {/* Kolom kedua */}
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </TwoColumnContainer>
        <p
          style={{
            color: "white",
            fontSize: "13px",
            marginTop: "9px",
          }}
        >
          Sudah punya akun ?{" "}
          <a
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </a>{" "}
        </p>
        {error && (
          <div
            style={{
              color: "red",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            {error}
          </div>
        )}{" "}
        {/* Tampilkan error jika ada */}
        <BtnContainer
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button type="submit">Register</Button>
        </BtnContainer>
        <SocialContainer>
          <SocialButton>
            <Icon className="fab fa-google"></Icon> Google
          </SocialButton>
          <SocialButton>
            <Icon className="fab fa-facebook"></Icon> Facebook
          </SocialButton>
        </SocialContainer>
      </Form>
    </PageContainer>
  );
};

export default registerForm;
