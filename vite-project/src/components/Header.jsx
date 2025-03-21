import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;

// const Button = styled.button`
//   background-color: red;
//   color: #fff;
//   font-size: 1rem;
//   width: 10rem;
//   font-weight: 600;
//   margin-left: auto;
//   margin-right: 100px;
//   padding: 0.6rem 1rem;
//   border-radius: 0.5rem;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;
//   &:hover {
//     background-color: green;
//   }
// `;

// const A = styled.a`
//   text-decoration: none;
//   color: #000;
//   font-size: 1rem;
//   font-weight: 600;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:hover {
//     color: green;
//     underline: 5px solid green;
//   }
// `;

// const LI = styled.li`
//   list-style: none;
//   margin: 0 1rem;
// `;

// const UL = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 50px;
// `;

// const Logo = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-right: auto;
//   margin-left: 130px;
//   align-items: center;
//   width: 10rem;

//   height: 3rem;
//   img {
//     width: 200px;
//   }

//   }
// `;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;

//   }
// `;

// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 50px;
//   width: 100%;
//   height: 10px;
//   @media (min-width: 320px) and (max-width: 768px) {
//     flex-direction: column;
//     background-color: blue;
//   }
// `;

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
    padding: 0.6rem 1rem;
    margin-left: 190px;
    margin-top: -6s0px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 768px) {

  text-align: center;
  font-size: 1.5rem;
`;

const LI = styled.li`
  list-style: none;
  margin: 0 1rem;

  @media (min-width: 320px) and (max-width: 768px) {
  flex-basis: 100%;
`;
const Ulist = styled.div`
  display: flex;
  align-items: center;
  list-style: none;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-basis: 100%;
    flex-wrap: wrap;
    margin-top: -250px;
  }
`;

const LogoName = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-left: 10px;

  @media (min-width: 320px) and (max-width: 768px) {
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;

     @media (min-width: 320px) and (max-width: 768px) {
  display: none;
  }

 
`;

const Nav = styled.nav`
  position:absolute;
  display: flex;
  jiustify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: yellow;
  top: 0;

  @media (min-width: 320px) and (max-width: 768px) {
  flex-wrap: wrap;
  height: 500px;
  display: flex;
  background-color: white;
  

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


  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-right: 20px;
  }

  @media (min-width: 320px) and (max-width: 768px) {

    display: flex;
    flex-wrap: wrap;
`;

const Bar = styled.div`
  flex-basis: 100%;
  heighr: 3px;
  background-color: #000;
  margin: 4px;
`;
