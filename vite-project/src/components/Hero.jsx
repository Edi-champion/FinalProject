import styled from "@emotion/styled";
import heropic from "../assets/heropic.jpeg";

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
            Get your healthy meals delivered to your doorsteps
          </HeroText>

          <HeroButtons>
            <Button1> Read More</Button1>
            <Button2>View plans</Button2>
          </HeroButtons>
        </HeroContentLeft>

        <HeroContentRight></HeroContentRight>
      </HeroContainer>
    </>
  );
}
export default Hero;

const HeroContentRight = styled.div`
  height: 40%;
  width: 40%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button2 = styled.button`
  padding: 1.5rem 5rem;
  border: none;
  margin-right: 5rem;
  background-color: rgb(109, 206, 90);
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 35px;
  margin-top: 1rem;

  &:hover {
    background-color: red;
  }
`;

const Button1 = styled.button`
  padding: 1.5rem 5rem;
  border: none;
  background-color: rgb(109, 206, 90);
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 20px;
  margin-top: 1rem;
  font-size: 1.2rem;
  border-radius: 35px;
  font-weight: 500;

  &:hover {
    background-color: red;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: lightcoral;
  padding-bottom: 2rem;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-top: 2px;
  color: black;
  font-size: 1rem;
  font-weight: 400;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  color: black;
  span {
    color: rgb(109, 206, 90);
  }
`;

const HeroContentLeft = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  display: flex;
  padding: 0 5rem;
  flex-direction: column;
  background-color: lightyellow;
`;

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-top: 5rem;
  background-color: lightblue;
`;
