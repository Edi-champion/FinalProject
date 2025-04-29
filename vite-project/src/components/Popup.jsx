import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const SignupPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContent>
        <CloseIcon onClick={onClose} /> {/* Close icon in the top right */}
        <Title>Create an Account</Title>
        <Button1 onClick={handleSignup}>Sign Up</Button1>
        <Paragraph>
          Already have an account?{" "}
          <button onClick={handleLoginRedirect}>Login</button>
        </Paragraph>
      </PopupContent>
    </PopupOverlay>
  );
};

export default SignupPopup;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  position: relative; /* Make sure the close icon is positioned relative to this */
`;

const Button1 = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Paragraph = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #666;

  button {
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;
