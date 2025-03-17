import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Header() {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <Logo>
            <img src={logo} alt="React logo" />
          </Logo>
          <UL>
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
          </UL>
          <Button>Get Menu</Button>
        </Nav>
      </HeaderContainer>
    </>
  );
}

export default Header;

const Button = styled.button`
  background-color: rgb(109, 206, 90);
  color: #fff;
  border: none;
  margin-left: 7rem;
  padding: 0.6rem 2rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

const Logo = styled.div`
  margin-right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10rem;
    justify-content: center;
    display: flex;
  }
`;

const A = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;

  &:hover {
    color: red;
  }
`;

const LI = styled.li`
  font-size: 1rem;
`;

const UL = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  list-style-type: none;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: rgb(178, 199, 221);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
  background-color: rgb(196, 199, 202);
`;
