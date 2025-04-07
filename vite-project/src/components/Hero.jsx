import styled from "@emotion/styled";
import logo2 from "../assets/logo2.webp";
import panier from "../assets/panier.png";

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroContentLeft>
          <HeroTitle>
            <span>Organic Food </span>
            <br />
            Delivery Service
          </HeroTitle>

          <HeroText>
            Get your healthy meals delivered to your doorsteps. We deliver
            organic food that is good for your health. Our meals are prepared
            with fresh ingredients and are delivered to your doorsteps.
          </HeroText>

          <HeroButtons>
            <Button1>Read More</Button1>
            <Button2>View Plans</Button2>
          </HeroButtons>
        </HeroContentLeft>

        <HeroContentRight>
          <img src={panier} alt="Organic Food Delivery" />
        </HeroContentRight>
      </HeroContent>
    </HeroContainer>
  );
}
export default Hero;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 100vh;
  background-color: #f3f5ed;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden; /* Added this line */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 2rem 1rem;
    margin-top: 3rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const HeroContentLeft = styled.div`
  width: 50%;
  padding: 0 4rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0 1.5rem;
    align-items: center;
  }
`;

const HeroContentRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    max-width: 350px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;

  span {
    color: green;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  color: #000;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button1 = styled.button`
  background-color: red;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 4rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.6rem 1rem;
  }
`;

const Button2 = styled(Button1)`
  background-color: green;
  &:hover {
    background-color: darkgreen;
  }
`;
