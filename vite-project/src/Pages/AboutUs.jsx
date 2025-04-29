import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Header from "../components/Header";
import Hero from "../components/AboutUsComponents/Hero";

import TestimonialsForm from "../components/AboutUsComponents/TestimonialsForm";
import OtherReviews from "../components/AboutUsComponents/otherReviews";
import Footer from "../components/Footer";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "The grocery delivery experience is smooth and efficient, ensuring that users receive their orders on time. Customers appreciate the clear tracking system that provides updates on the delivery status, from order confirmation to final drop-off. ",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "The packaging is well-organized, with fresh and perishable items separated to maintain quality during transportation. Many users find the contactless delivery option convenient, especially for busy schedules or when they are unavailable to receive the order in person.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "David Johnson",
    feedback:
      " Users appreciate the option to add special instructions for delivery, such as leaving groceries at the doorstep or selecting a preferred drop-off location. Overall, the delivery process is designed to be seamless, reliable, and user-friendly, making grocery shopping more convenient than ever.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Emma Brown",
    feedback:
      "Absolutely loved the food and the atmosphere. A must-visit place!",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Partners>Partners</Partners>
        <Title>What Our Customers Say</Title>
        <Carousel>
          <Arrow onClick={prevTestimonial}>
            <FaChevronLeft />
          </Arrow>
          <Card>
            <ProfilePic
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
            />
            <Name>{testimonials[currentIndex].name}</Name>
            <Icon>
              <RiDoubleQuotesL />
            </Icon>
            <Feedback>"{testimonials[currentIndex].feedback}"</Feedback>
          </Card>
          <Arrow onClick={nextTestimonial}>
            <FaChevronRight />
          </Arrow>
        </Carousel>
      </Container>
      <TestimonialsForm />
      <OtherReviews />
      <Footer />
    </>
  );
}

export default AboutUs;

const Partners = styled.div`
  font-size: 1.8rem;

  font-weight: 700;
  font-family: sacramento;
  color: yellowgreen;
  margin-bottom: -30px;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: yellowgreen;
`;

// Styled Components
const Container = styled.div`
  max-width: 2000px;
  height: 500px;
  margin: 100px auto;
  padding: 20px;
  text-align: center;

  margin-top: 20px;

  @media (max-width: 768px) {
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  width: 600px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  margin-top: -15px;
`;

const Feedback = styled.div`
  font-style: italic;
  color: #555;
  margin-top: -5px;
`;

const Arrow = styled.button`
  background: none;
  border: 1px solid #ccc;
  font-size: 2rem;

  width: 50px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 60%;
  cursor: pointer;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;
