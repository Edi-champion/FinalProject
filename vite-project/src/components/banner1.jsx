import styled from "@emotion/styled";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";

function banner1() {
  return (
    <Wrapper>
      <WrapperBig>
        <Wrapper1>
          <Icon1>
            <MdDeliveryDining />
          </Icon1>

          <Text1>
            <h4>Smooth Delivery</h4>
            <p>
              We provide a smooth delivery experience for our customers. Our
              delivery team is trained to handle your orders with care
            </p>
          </Text1>
        </Wrapper1>

        <Wrapper2>
          <Icon2>
            <MdOutlinePayments />
          </Icon2>

          <Text2>
            <h4>Easy payments</h4>
            <p>
              We offer a variety of payment options to make your shopping
              experience as convenient as possible.
            </p>
          </Text2>
        </Wrapper2>

        <Wrapper3>
          <Icon3>
            <MdOutlineFastfood />
          </Icon3>

          <Text3>
            <h4>Exact calories</h4>
            <p>
              We provide exact calories for each food item, so you can make
              informed decisions about your meals.
            </p>
          </Text3>
        </Wrapper3>
      </WrapperBig>
    </Wrapper>
  );
}

export default banner1;

const Wrapper3 = styled.div`
  display: flex;
  align-items: center;
  background-color: #292d35;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 240px;
  }
`;

const Text3 = styled.div`
  width: 80%;
  background-color: #292d35;
  padding: 30px;
  height: 70%;
  margin-left: 20px; 
  color: white;

  h4 {
    font-size: 20px;
    margin-top: 20px;
  }

  p {
    font-size: 15px;
    margin-top: -20px;
  }

  @media (max-width: 768px) {

  h4 {
    margin-top: -50px;
`;

const Icon3 = styled.div`
  font-size: 70px;
  padding-left: 20px;
  color: yellowgreen;
`;

const Wrapper2 = styled.div`
  display: flex;
  background-color: yellowgreen;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 240px;
  }
`;

const Text2 = styled.div`
  width: 80%;
  background-color: yellowgreen;
  padding: 30px;
  height: 70%;
  margin-left: 20px;

  h4 {
    font-size: 20px;
    margin-top: 20px;
    color: white;
  }

  p {
    font-size: 15px;
    margin-top: -20px;
  }

  @media (max-width: 768px) {

  h4 {
    margin-top: -50px;
`;

const Icon2 = styled.div`
  font-size: 70px;
  color: white;
  padding-left: 20px;
`;

const Text1 = styled.div`
  width: 80%;

  background-color: white;
  padding: 30px;
  height: 70%;
  margin-left: 20px;
  
  h4 {
    font-size: 20px;
    margin-top: 20px;
  }

  p {
    font-size: 15px;
    margin-top: -20px;
  }

  @media (max-width: 768px) {

  h4 {
    margin-top: -50px;



`;

const Icon1 = styled.div`
  font-size: 70px;
  color: yellowgreen;
  padding-left: 20px;
`;

const Wrapper1 = styled.div`
  display: flex;
  background-color: white;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 240px;
  }
`;

const WrapperBig = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    display: flex;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -80px;
  width: 100%;
  height: 200px;
  font-family: "Poppins", sans-serif;

  // background-color: rgb(202, 231, 206);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    text-align: center;
    padding: 1rem;
    width: 90%;
    margin-top: 50px;
  }
`;
