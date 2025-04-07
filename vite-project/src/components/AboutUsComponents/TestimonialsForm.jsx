import React from "react";
import styled from "@emotion/styled";

const Testimonials = () => {
  return (
    <Container>
      <Heading>Feedback</Heading>
      <SubHeading>Leave your Review</SubHeading>
      <Text>
        Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam{" "}
        <br />
        euismod dapibus turpis, vitae placerat purus vestibulum non.
        Pellentesque <br /> ut nisi viverra, dictum nisi sed.
      </Text>
      <Form>
        <Input type="text" placeholder="Your name" />
        <Input type="email" placeholder="Your email" />
        <TextArea placeholder="Message" />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Testimonials;

// Styled Components
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;

  text-align: center;

  background-color: #f8f8f0;
  border-radius: 10px;

  @media (max-width: 768px) {
  margin-top: 10rem;
  height: 100vh;
  max-width: 100%;
`;

const Heading = styled.h3`
  font-size: 2.5rem;
  color: #87a23d;
  font-weight: 500;
  font-family: "sacramento", sans-serif;
  margin-bottom: 1rem;
`;

const SubHeading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: -2rem;
  color: #333;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    width: 80%;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 900px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 50px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background: #fff;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border-radius: 50px;
  border: 1px solid #ddd;
  font-size: 1rem;
  min-height: 120px;
  background: #fff;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #e63946;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: yellowgreen;
  }
`;
