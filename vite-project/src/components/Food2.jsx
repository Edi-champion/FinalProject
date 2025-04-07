import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { FaRegClock } from "react-icons/fa6";
import { RxVideo } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";

function Food2() {
  return (
    <>
      <Wrapper>
        <WrapperBig>
          <WrapperContentLeft>
            <img src="./src/assets/salad2.png" alt="" />
          </WrapperContentLeft>

          <WrapperContentRight>
            <Title>
              Enjoy our <span>free and balanced recipes made just for you</span>
            </Title>

            <Content>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </Content>

            <InfoWrapper>
              <Item1>
                <h3>Energy: 498 kcal</h3>
                <h3>Protein: 26g</h3>
                <h3>Fat: 8g</h3>
                <h3>Carbohydrates: 49g</h3>
              </Item1>
            </InfoWrapper>

            <Button>View Recipe </Button>
          </WrapperContentRight>
        </WrapperBig>
      </Wrapper>
    </>
  );
}

export default Food2;

const WrapperContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  img {
    width: 550px;
    object-fit: cover;
    margin-top: 50px;
    margin-left: 20px;
    display: block;
    border-radius: 1.2rem;

    &:hover {
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
    }


  @media (max-width: 768px) {
   width: 260px;
   position: relative;
   top: 72rem;
   left: -2.5rem;
   img {
      display: none;
    }

  }
`;

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 1rem;
  width: 32%;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 4rem;
  border: none;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: darkgreen;
    transition: all 0.3s zoom-in-out;


  @media (max-width: 768px) {
    display: none;
  }

    

`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  color: yellowgreen;
`;

const Item1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
  margin-top: -5px;
  margin-left: -1.3rem;

  h3 {
    color: black;
    font-size: 1rem;
    margin-left: 1.3rem;
    margin-top: -1px;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    text-align: center;
    width: 230px;
`;

const WrapperContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  padding: 0 5rem;

  @media (max-width: 768px) {
    margin-top: -20rem;
  


`;

const Title = styled.div`
  font-size: 3.9rem;
  font-weight: 700;
  line-height: 1.1;
  color: black;
  span {
    color: yellowgreen;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
    width: 230px;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  color: black;
  display: flex;

  @media (max-width: 768px) {
    text-align: center;
    width: 200px;
    margin-top: 2rem;
    margin-left: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: center;
  height: 800px;
  margin-top: -5.5rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    margin-left: -2rem;
    height: 1200px;
  }
`;

const WrapperBig = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  background-color: #f6f6f6;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -2rem;
    align-items: center;
    justify-content: center;
  }
`;
