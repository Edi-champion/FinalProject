/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !password || !confirm) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirm) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    navigate("/LandingPage");
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Title>Sign Up</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
            <Button type="submit">Sign Up</Button>
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          </Form>
          <LoginRedirect>
            Already have an account? <StyledLink to="/login">Log in</StyledLink>
          </LoginRedirect>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Signup;

// Styled Components with Emotion
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 16px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-family: "Fira Sans", sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 12px;
  background-color: red;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: green;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;

const LoginRedirect = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
