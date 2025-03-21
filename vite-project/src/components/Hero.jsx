import styled from "@emotion/styled";
import logo2 from "../assets/logo2.webp";
import panier from "../assets/panier.png";

function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroContentLeft>
          <HeroTitle>
            <span>Organic Food </span>
            <br />
            Delivery Service
          </HeroTitle>

          <HeroText>
            Get your healthy meals delivered to your doorsteps. We deliver
            organic food that is good for your health. Our meals are prepared
            with fresh ingredients and are delivered to your doorsteps.{" "}
          </HeroText>

          <HeroButtons>
            <Button1> Read More</Button1>
            <Button2>View plans</Button2>
          </HeroButtons>
        </HeroContentLeft>

        <HeroContentRight>
          <img
            src={panier}
            alt="logo
          "
          />
        </HeroContentRight>
      </HeroContainer>
    </>
  );
}
export default Hero;

const HeroContentRight = styled.div`
  width: 50%;
  height: 100%;
  img {
    width: 80%;
    object-fit: fill;
    margin-top: 5px;
    margin-left: 50px;
    display: block;
  }
`;

const Button2 = styled.button`
  background-color: red;
  color: #fff;
  font-size: 1rem;
  width: 10rem;
  font-weight: 600;

  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: green;
  }
`;

const Button1 = styled.button`
  background-color: green;
  color: #fff;
  font-size: 1rem;
  width: 10rem;
  font-weight: 600;
  margin-right: 20px;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: red;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  margin-top: 60px;
`;

const HeroText = styled.div`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 20px;
  
  line-height: 1.5;
  font-fami
`;

const HeroTitle = styled.div`
  font-size: 4.2rem;
  font-weight: 700;
  margin-top: -150px;
  line-height: 1.1;

  color: #000;
  margin-bottom: 20px;
  span {
    color: green;
    font-size: 5rem;
  }
`;

const HeroContentLeft = styled.div`
  width: 50%;
  margin-left: 50px;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
  align-items: center;
  padding: 0 50px;
  height: 80vh;
  padding-left: 80px;
  padding-right: 80px;
  background-color: rgb(247, 231, 218);
`;
