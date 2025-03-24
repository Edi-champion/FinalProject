import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Info() {
  return (
    <>
      <Wrapper>
        <WrapperContentLeft>
          <h2>
            Healthy and tasty foods with <br /> <span>natural ingredients</span>
          </h2>

          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </p>

          <InfoWrapper>
            <InfoItem>
              <i class="fa-regular fa-clock"></i>
              <h4>Everyday from 8AM to 10PM</h4>
            </InfoItem>

            <InfoItem>
              <i class="fa-solid fa-phone"></i>
              <h4>+49260-5731-08</h4>
            </InfoItem>
          </InfoWrapper>

          <Button>Read More </Button>

          <Contactinfo></Contactinfo>
        </WrapperContentLeft>

        <WrapperContentRight></WrapperContentRight>
      </Wrapper>
    </>
  );
}

export default Info;

const Contactinfo = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #f8b703;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f8b703;
  }
`;

const InfoItem = styled.div`
  display: flex;
  margin: 2rem 0;

  i {
    font-size: 2rem;
    color: white;
  }
  h4 {
    color: white;
    margin-left: 1rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const WrapperContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    color: white;
    span {
      color: #f8b703;
    }

    p {
      color: white;
      margin: 1rem 0;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgb(134, 107, 107);
`;
