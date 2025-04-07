import styled from "@emotion/styled";
import { GiFruitBowl } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { LuPackageOpen } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

function Info2() {
  return (
    <>
      <Wrapper>
        <WrapperBig>
          <Wrapper1>
            <Icon>
              <GiFruitBowl />
            </Icon>

            <Text>
              <h4>Only natural food</h4>
              <p>
                class aptent taciti sociosqu ad litora torquent per conubia
                nostra
              </p>
            </Text>
          </Wrapper1>

          <Wrapper1>
            <Icon>
              <BiDish />
            </Icon>
            {/* <Line></Line> */}

            <Text>
              <h4>Various Choice</h4>
              <p>
                class aptent taciti sociosqu ad litora torquent per conubia
                nostra
              </p>
            </Text>
          </Wrapper1>

          <Wrapper1>
            <Icon>
              <LuPackageOpen />
            </Icon>

            <Text>
              <h4>Sustainable packaging</h4>
              <p>
                class aptent taciti sociosqu ad litora torquent per conubia
                nostra
              </p>
            </Text>
          </Wrapper1>

          <Wrapper1>
            <Icon>
              <RiDeleteBin6Line />
            </Icon>

            <Text>
              <h4>No waste</h4>
              <p>
                class aptent taciti sociosqu ad litora torquent per conubia
                nostra
              </p>
            </Text>
          </Wrapper1>
        </WrapperBig>
      </Wrapper>
    </>
  );
}

export default Info2;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: -0.5rem;
  color: black;
  font-size: 1rem;

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.2rem;
  }


  @media (max-width: 768px) {

  width: 300px;
  
    h4 {
      font-size: 1.4rem;
      
    }

    p {
      font-size: 1.1rem;
      margin-top: -1rem;

    }
`;

const Icon = styled.div`
  font-size: 3rem;
  display: flex;
  align-items: center;
  color: white;
  background-color: yellowgreen;
  padding: 2rem;
  height: 40px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-top: -15rem;
    margin-left: 1rem;
  }
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 300px;
  background-color: #f3f5ed;
  padding: 30px;
  padding-top: 0px;
  margin-top: -0.5rem;
`;

const Line = styled.div`
  width: 120px;
  height: 2px;
  position: absolute;
  top: 1960px;
  left: 66%;
  background-color: red;
`;

const WrapperBig = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 80%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 35px;
    margin-top: 100px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: center;
  height: 400px;
  margin-top: 1rem;
  background-color: #f3f5ed;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;
