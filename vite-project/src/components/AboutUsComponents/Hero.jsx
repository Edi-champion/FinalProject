import styled from "@emotion/styled";
import heroImage from "../../assets/colorful.jpg";
function Hero() {
  return (
    <>
      <Wrapper>
        <Content>
          <Title>Testimonials</Title>
          <Inner>Home / About Us</Inner>
        </Content>
      </Wrapper>
    </>
  );
}

export default Hero;

const Inner = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  margin-top: 5rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  position: absolute;
`;

const Content = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  margin-top: 12vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${heroImage});
  background-size: cover;
  font-family: "Poppins", sans-serif;
`;
