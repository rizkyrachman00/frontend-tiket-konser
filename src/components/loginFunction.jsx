import axios from "axios";

const loginFunction = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:8000/api/auth/login", {
      email,
      password,
    });
    return response.data; // Mengembalikan data pengguna jika login berhasil
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Melempar error jika terjadi masalah saat login
  }
};

export default loginFunction;
