import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { MdMenu, MdClose } from "react-icons/md";
import AboutUs from "../Pages/AboutUs";
import ProductPage from "../Pages/ProductPage";
import LandingPage from "../Pages/LandingPage";
import Blog from "../Pages/Blog";
import Contacts from "../Pages/Contacts";
import Cart from "../Pages/Cart";
import { FaShoppingCart } from "react-icons/fa";

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
            <MdClose size={40} />
          </CloseButton>
          <LI>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1rem",
              }}
            >
              Home
            </Link>
          </LI>
          <LI>
            <Link
              to="/AboutUs"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1rem",
              }}
            >
              About Us
            </Link>
          </LI>
          <LI>
            <Link
              to="/ProductPage"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1rem",
              }}
            >
              Products
            </Link>
          </LI>
          <LI>
            <Link
              to="/Blog"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1rem",
              }}
            >
              Blog
            </Link>
          </LI>
          <LI>
            <Link
              to="/Contacts"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1rem",
              }}
            >
              Contacts
            </Link>
          </LI>
          <LI>
            <CartLink to="/cart">
              <FaShoppingCart size={24} />
            </CartLink>
          </LI>
        </Ulist>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

// Styled Components

const CartLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: green;
  }
`;

const LI = styled.li`
  list-style: none;
  margin: 0 1rem;
  text-decoration: none;

  &hover {
    color: #019875;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const Ulist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fira Sans", sans-serif;
  list-style: none;
  width: 50%;
  padding: 0;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: -30px;
    left: 0;
    width: 100%;
    height: 70vh;
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
    margin-top: 100px;
    font-size: 4rem;
    color: green;
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
