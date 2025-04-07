import styled from "@emotion/styled";

function Subscribe() {
  return (
    <SubscribeSection>
      <Content>
        <Title>
          Subscribe <span>to our newsletter</span>
        </Title>
        <Description>
          Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
          malesuada eros nec luctus laoreet.
        </Description>
        <Form>
          <Input type="email" placeholder="Your email ..." />
          <SubscribeButton>Subscribe</SubscribeButton>
        </Form>
      </Content>
    </SubscribeSection>
  );
}

export default Subscribe;

const SubscribeSection = styled.section`
  background-color: #a3d661;
  padding: 3rem 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

const Content = styled.div`
  max-width: 700px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: black;
  margin-bottom: 1rem;

  span {
    color: #000;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: black;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 2rem;
  width: 60%;
  max-width: 400px;
  outline: none;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SubscribeButton = styled.button`
  background-color: red;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  margin-left: -8rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    width: 40%;
    font-size: 0.9rem;
    padding: 1rem 2rem;
    margin-left: 0;
  }
`;
