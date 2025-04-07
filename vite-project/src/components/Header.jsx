import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { MdMenu, MdClose } from "react-icons/md";
import AboutUs from "../Pages/AboutUs";
import ProductPage from "../Pages/ProductPage";
import LandingPage from "../Pages/LandingPage";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <img src={logo} alt="React logo" />
        </Logo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </MobileIcon>

        <Ulist isOpen={isOpen}>
          <CloseButton onClick={() => setIsOpen(false)}>
            <MdClose size={30} />
          </CloseButton>
          <LI>
            <Link to="/"></Link>Home
          </LI>
          <LI>
            <Link to="/AboutUs">About Us</Link>
          </LI>
          <LI>
            <Link to="/ProductPage">Products</Link>
          </LI>
          <LI>Blog</LI>
          <LI>Contacts</LI>
        </Ulist>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

// Styled Components
const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.6rem 2rem;
  border-radius: 4rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-left: auto;
  margin-right: 250px;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px auto;
    height: 40px;
    font-size: 0.9rem;
    padding: 0.5rem 1.5rem;
    display: none;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  transition: color 0.3s;

  &:hover {
    color: green;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;

const LI = styled.li`
  list-style: none;
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const Ulist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 50%;
  padding: 0;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    padding-top: 60px;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0px 4px 10px rgba(0,0,0,0.1)" : "none"};
    z-index: 1000;
  }
`;

const CloseButton = styled.div`
  display: none;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;

  img {
    width: 160px;
    margin-right: -90px;
    margin-top: 10px;

    @media (max-width: 768px) {
      width: 80px;
      margin-left: -130px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  background-color: white;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 20px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
    align-items: center;
    justify-content: center;
    margin-right: 80px;
    margin-top: 10px;
  }
`;
