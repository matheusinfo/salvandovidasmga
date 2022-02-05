import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: justify;

  strong {
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1px;
    color: #575761;
    margin-bottom: 15px;
  }

  @media (max-width: 500px) {
    margin-bottom: 15px;

    strong {
      font-size: 17px;
    }
  }
`;
