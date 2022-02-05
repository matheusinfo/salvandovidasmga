import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #000000;
  padding: 10px;

  @media (max-height: 900px) {
    position: static;
  }

  div {
    display: flex;
    max-width: 70%;
    align-items: flex-start;
    justify-content: space-around;

    @media (max-width: 1200px) {
      max-width: 100%;
    }

    @media (max-width: 500px) {
      margin-bottom: 15px;
      flex-direction: column;
    }
  }

  footer {
    color: #575761;
    font-weight: 500;
    text-align: end;
    margin: 25px 10px 0px 0px;
    font-size: 12px;
  }
`;
