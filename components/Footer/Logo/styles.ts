import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 15px;

  strong {
    font-size: 30px;

    span {
      color: #3a3a61;
      font-size: 40px;
      margin: 0 10px;
    }
  }

  @media (max-width: 500px) {
    strong {
      font-size: 25px;

      span {
        font-size: 35px;
      }
    }
  }
`;
