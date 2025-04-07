import React from "react";
import styled from "@emotion/styled";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Amazing experience! The food was delicious and the service was top-notch. I truly appreciated the ambiance, and the staff went above and beyond to ensure a great time. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "One of the best restaurants I've ever visited. The flavors were rich and authentic, and the presentation was impeccable. Definitely a must-visit for any food lover!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "David Johnson",
    feedback:
      "Great ambiance, and the staff were super friendly. The entire dining experience was seamless, from the welcoming atmosphere to the delightful dishes. I’ll be coming back for sure!",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Emma Brown",
    feedback:
      "Absolutely loved the food and the atmosphere. The attention to detail in every dish was remarkable. I left feeling completely satisfied and happy!",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },

  // {
  //   name: "Michael Green",
  //   feedback:
  //     "I had such a wonderful time here! The service was prompt, the food was out of this world, and the ambiance was just perfect for a cozy dinner. Will be recommending it to everyone!",
  //   image: "https://randomuser.me/api/portraits/men/47.jpg",
  // },
  // {
  //   name: "Sophia Martinez",
  //   feedback:
  //     "The flavors were absolutely divine! Every dish had a perfect balance of taste and presentation. This restaurant exceeded my expectations, and I will definitely return soon!",
  //   image: "https://randomuser.me/api/portraits/women/28.jpg",
  // },
  // {
  //   name: "Robert Wilson",
  //   feedback:
  //     "A hidden gem! The customer service was exceptional, and the food was out of this world. I wish I had discovered this place sooner!",
  //   image: "https://randomuser.me/api/portraits/men/53.jpg",
  // },
  // {
  //   name: "Emily Johnson",
  //   feedback:
  //     "A perfect blend of taste, ambiance, and hospitality. I can't wait to come back and try more dishes from their incredible menu!",
  //   image: "https://randomuser.me/api/portraits/women/37.jpg",
  // },
];

function Reviews() {
  return (
    <ReviewsContainer>
      <Title>Customer Reviews</Title>
      <ReviewsGrid>
        {testimonials.map((testimonial, index) => (
          <ReviewCard key={index}>
            <ProfilePic src={testimonial.image} alt={testimonial.name} />

            <Name>{testimonial.name}</Name>
            <Icon>
              <RiDoubleQuotesL />
            </Icon>
            <Feedback>"{testimonial.feedback}"</Feedback>
          </ReviewCard>
        ))}
      </ReviewsGrid>
    </ReviewsContainer>
  );
}

export default Reviews;

const Icon = styled.div`
  font-size: 4rem;
  color: yellowgreen;
`;

const ReviewsContainer = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & > div:nth-child(1) {
    height: 450px;
    padding-top: 100px;

    box-shadow: ;

    &:hover {
      border: 0.5px solid lightgray;
    }
  }

  & > div:nth-child(2) {
    background-color: #f3f5ed;
    height: 360px;
    padding-top: 100px;

    &:hover {
      border: 0.5px solid lightgray;
    }
  }

  & > div:nth-child(3) {
    background-color: #f3f5ed;
    height: 360px;
    padding-top: 100px;

    &:hover {
      border: 0.5px solid lightgray;
    }

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  & > div:nth-child(4) {
    height: 450px;
    padding-top: 200px;
    margin-top: -100px;

    box-shadow: ;

    &:hover {
      border: 0.5px solid lightgray;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ReviewCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  margin-top: 5px;
`;

const Feedback = styled.div`
  font-style: italic;
  color: #555;
  margin-top: -10px;
  text-align: center;
  font-size: 1.05rem;
  width: 90%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
