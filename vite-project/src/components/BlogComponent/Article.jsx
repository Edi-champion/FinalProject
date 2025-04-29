import styled from "@emotion/styled";
import { FaRegComments } from "react-icons/fa";
import React from "react";

function Article() {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" />
        </ImageContainer>
        <ContentContainer>
          <Title>Eating Healthy</Title>
          <Author>By Author Name</Author>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Sed auctor, nisl eget ultricies
            tincidunt, nunc nisl aliquet nunc, eget tincidunt nisl nunc eget
            nunc.
          </Text>

          <DateContainer>
            <Date>Published on: 2023-10-01</Date>
            <Tags>
              {" "}
              <FaRegComments />4 Comments
            </Tags>
          </DateContainer>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Article;

const Container = styled.div``;
