import styled from "@emotion/styled";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";

function banner1() {
  return (
    <>
      <Wrapper>
        <Wrapper1>
          <Icon>
            <MdDeliveryDining />
          </Icon>

          <Text>
            <h4>Free delivery service</h4>

            <p>
              Get your healthy meals delivered to your doorsteps. We deliver
            </p>
          </Text>
        </Wrapper1>

        <Wrapper2>
          <Icon>
            <MdOutlinePayments />
          </Icon>

          <Text>
            <h4>Easy payments</h4>
            <p>
              class aptent taciti sociosqu ad litora torquent per conubia nostra
            </p>
          </Text>
        </Wrapper2>

        <Wrapper3>
          <Icon>
            <MdOutlineFastfood />
          </Icon>

          <Text>
            <h4>Exact calories</h4>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
            </p>
          </Text>
        </Wrapper3>
      </Wrapper>
    </>
  );
}

export default banner1;

const Text = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  width: 30%;
  font-size: 4.8rem;
  margin-top: 30px;
`;

const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-right: 1px solid black;
  height: 100%;
  width: 30%;
  border-radius: 10px 0px 0px 10px;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8ec038;
  border-right: 1px solid black;
  height: 100%;
  width: 30%;
`;

const Wrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292d35;
  border-right: 1px solid black;
  height: 100%;
  width: 30%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: -100px;
  justify-content: center;
`;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   margin-top: -80px;
//   width: 100%;
//   margin-bottom: 20px;
//   background-color: rgb(167, 132, 132);
// `;

// const Wrapper1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: yellow;
//   margin: 20px;
//   height: 100%;
//   padding: 20px;
// `;
// const Icon = styled.div`
//   font-size: 3rem;
//   margin-bottom: 20px;
// `;
// const Text = styled.div`
//   text-align: center;

//   h4 {
//     font-size: 1.5rem;
//   }

//   p {
//     font-size: 1rem;
//   }
// `;
