import React from "react";
import styled from "styled-components";

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
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
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
  margin-top: 50px;

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
  cursor: pointer;
`;

const SocialButton = styled.div`
  background: red;
  border: none;

  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.47);
    cursor: pointer;
  }
`;

const Icon = styled.i`
  margin-right: 4px;
`;

const LoginForm = () => {
  return (
    <>
      <PageContainer>
        <Background>
          <FirstShape />
          <LastShape />
        </Background>
        <Form>
          <Title>Login Here</Title>
          <Label htmlFor="username">Username</Label>
          <Input type="text" placeholder="Email or Phone" id="username" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="Password" id="password" />
          <div
            style={{
              padding: "0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            className="container"
          >
            <Button>Log In</Button>
          </div>
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
    </>
  );
};

export default LoginForm;
