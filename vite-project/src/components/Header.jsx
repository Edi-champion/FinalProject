import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <img src={logo} alt="React logo" />
          <LogoName> Fresh Fresh </LogoName>
        </Logo>

        <MobileIcon>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </MobileIcon>

        <Ulist>
          <LI>
            <A href="">
              Home <MdKeyboardArrowRight />
            </A>
          </LI>
          <LI>
            <A href="">
              About us
              <MdKeyboardArrowRight />
            </A>
          </LI>
          <LI>
            <A href="">
              Blog
              <MdKeyboardArrowRight />
            </A>
          </LI>
          <LI>
            <A href="">
              Contacts
              <MdKeyboardArrowRight />
            </A>
          </LI>
          <LI>
            <A href="">
              Pages
              <MdKeyboardArrowRight />
            </A>
          </LI>
          <LI>
            <A href="">
              Get menu
              <MdKeyboardArrowRight />
            </A>
          </LI>
          <LI>
            <A href="">
              Multipage
              <MdKeyboardArrowRight />
            </A>
          </LI>
        </Ulist>

        <Button>Get Menu</Button>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

const Button = styled.button`
  background-color: red;
  color: #fff;
  font-size: 1rem;
  width: 10rem;
  font-weight: 600;
  margin-left: auto;
  margin-right: 100px;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: green;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    margin-right: 0;
    margin-left: auto;
    width: 100%;
    margin-top: 20px;
    height: 50px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;

  &:hover {
    color: green;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;

const LI = styled.li`
  list-style: none;
  margin: 0 1rem;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-basis: 100%;
    margin: 10px 0;
    text-align: center;
  }
`;

const Ulist = styled.div`
  display: flex;
  align-items: center;
  list-style: none;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
`;

const LogoName = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-left: 10px;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 50px;
    }
  }
`;

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: yellow;
  top: 0;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    background-color: white;
    padding: 20px 10px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  width: 30px;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    margin-right: 20px;
  }
`;

const Bar = styled.div`
  height: 3px;
  background-color: #000;
`;
