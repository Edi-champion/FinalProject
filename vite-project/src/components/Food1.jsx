import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { FaRegClock } from "react-icons/fa6";
import { RxVideo } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";

function Food1() {
  return (
    <>
      <Wrapper>
        <WrapperBig>
          <WrapperContentLeft>
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
          </WrapperContentLeft>

          <WrapperContentRight>
            <img src="./src/assets/salad.jpg" alt="Organic Food Delivery" />
          </WrapperContentRight>
        </WrapperBig>
      </Wrapper>
    </>
  );
}

export default Food1;

const WrapperContentRight = styled.div`
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
   margin-left: -2rem;
   

   img {
      width: 50px;
      margin-left: 5rem;
      object-fit: cover;
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
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px auto;
    margin-top: 2rem;
    margin-left: 1rem;
    height: 40px;
    font-size: 0.9rem;
    padding: 0.5rem 1.5rem;
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
  }
`;

const WrapperContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  padding: 0 5rem;
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
    font-size: 2.6rem;
    text-align: center;
    width: 230px;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  color: black;

  @media (max-width: 768px) {
    text-align: center;
    width: 230px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: center;
  height: 800px;
  margin-top: 2rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const WrapperBig = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  background-color: #f6f6f6;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
`;
