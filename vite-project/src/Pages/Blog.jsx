import styled from "@emotion/styled";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCommentDots } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Hero from "../components/Hero";

const BlogPage = () => {
  return (
    <>
      <Header />
      <HeroSection>
        <Title>Read our Latest Articles Here</Title>
      </HeroSection>

      <IntroductoryText>
        {/* <Intro>
          Welcome to our blog! Here, we share insights, tips, and stories
          related to our grocery delivery service, designed specifically for
          busy professionals.
        </Intro> */}

        <Post>
          <PostImage>
            <img
              src="https://img.freepik.com/free-photo/high-angle-man-cooking-with-smartphone_23-2150812839.jpg?t=st=1744323107~exp=1744326707~hmac=fcc1876098eaf5b07d54adf99cf10eb656f2bfb4a91f8f1c0cd85fb78bf711de&w=996"
              alt="Post Image"
            />
          </PostImage>

          <PostContent>
            <PostTitle>Quick and Easy Office Snacks</PostTitle>
            <PostSummary>
              Busy professionals often struggle to find healthy snack options
              during the workday. In this post, we will suggest a variety of
              quick and easy snacks that can be easily ordered and delivered to
              the office, catering to the needs of employees looking for
              convenient choices.Options may include fresh fruit baskets, mixed
              nuts, yogurt parfaits, and veggie trays with hummus.
              <Icons>
                <Date>
                  <Icone>
                    <MdOutlineDateRange />
                  </Icone>
                  2023-10-01
                </Date>

                <Comment>
                  <Icone>
                    <FaCommentDots />
                  </Icone>{" "}
                  5 Comments
                </Comment>
              </Icons>
            </PostSummary>

            <ReadMore>Read More</ReadMore>
          </PostContent>
        </Post>

        <Post>
          <PostImage>
            <img
              src="https://img.freepik.com/free-photo/side-view-man-cooking-with-smartphone_23-2150812807.jpg?t=st=1744367797~exp=1744371397~hmac=412a6e3bfb6a6b856bd2995a5bdc534f6c0ddfc62a5e13e3d1f1e9e0a880349e&w=996"
              alt="Post Image"
            />
          </PostImage>

          <PostContent>
            <PostTitle>Quick and Easy Office Snacks</PostTitle>
            <PostSummary>
              Busy professionals often struggle to find healthy snack options
              during the workday. In this post, we will suggest a variety of
              quick and easy snacks that can be easily ordered and delivered to
              the office, catering to the needs of employees looking for
              convenient choices.Options may include fresh fruit baskets, mixed
              nuts, yogurt parfaits, and veggie trays with hummus.
              <Icons>
                <Date>
                  <Icone>
                    <MdOutlineDateRange />
                  </Icone>
                  2023-10-01
                </Date>

                <Comment>
                  <Icone>
                    <FaCommentDots />
                  </Icone>{" "}
                  5 Comments
                </Comment>
              </Icons>
            </PostSummary>

            <ReadMore>Read More</ReadMore>
          </PostContent>
        </Post>

        <Post>
          <PostImage>
            <img
              src="https://img.freepik.com/free-photo/tasty-fresh-poke-bowl-with-avocado-quinoa-vegetables-top-view_1220-7004.jpg?t=st=1744362840~exp=1744366440~hmac=d4513b6fffe6575bae082195c861f12976a6bc70dafb64ce9442423cb2174f22&w=1380"
              alt="Post Image"
            />
          </PostImage>

          <PostContent>
            <PostTitle>Quick and Easy Office Snacks</PostTitle>
            <PostSummary>
              Busy professionals often struggle to find healthy snack options
              during the workday. In this post, we will suggest a variety of
              quick and easy snacks that can be easily ordered and delivered to
              the office, catering to the needs of employees looking for
              convenient choices.Options may include fresh fruit baskets, mixed
              nuts, yogurt parfaits, and veggie trays with hummus.
              <Icons>
                <Date>
                  <Icone>
                    <MdOutlineDateRange />
                  </Icone>
                  2023-10-01
                </Date>

                <Comment>
                  <Icone>
                    <FaCommentDots />
                  </Icone>{" "}
                  5 Comments
                </Comment>
              </Icons>
            </PostSummary>

            <ReadMore>Read More</ReadMore>
          </PostContent>
        </Post>
      </IntroductoryText>

      <Footer />
    </>
  );
};

export default BlogPage;

const Icone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-top: -1px;
  font-size: 0.9rem;
  color: #606467;
  margin-left: 20px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #606467;
  font-family: "Open Sans", sans-serif;
  line-height: 1.9;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: #8ec038;
  }
`;

const Date = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #606467;
  font-family: "Open Sans", sans-serif;
  line-height: 1.9;
  cursor: pointer;

  &:hover {
    color: #8ec038;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #606467;
  font-family: "Open Sans", sans-serif;
  line-height: 1.9;
`;

const IntroductoryText = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostContent = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f5ed;

  @media (max-width: 768px) {
    height: auto;
`;

const PostImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    object-fit: cover;
  }
`;

const HeroSection = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(https://img.freepik.com/free-photo/tasty-fresh-poke-bowl-with-avocado-quinoa-vegetables-top-view_1220-7004.jpg?t=st=1744362840~exp=1744366440~hmac=d4513b6fffe6575bae082195c861f12976a6bc70dafb64ce9442423cb2174f22&w=1380);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
`;

const Intro = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
`;

const Post = styled.div`
  margin-bottom: 30px;
  border-radius: 8px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 40px;
  font-family: "Fira Sans", sans-serif;
  color: #333;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #8ec038;
  }
`;

const PostSummary = styled.div`
  font-size: 0.9rem;
  margin-bottom: 20px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Open Sans", sans-serif;
  color: #606467;
  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ReadMore = styled.button`
  padding: 10px 40px;
  background-color: #8ec038;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  border: none;
  border-radius: 50px;
  position: absolute;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: -20px; /* Add margin to separate from summary */

  &:hover {
    background-color: #45a049;
  }
`;
