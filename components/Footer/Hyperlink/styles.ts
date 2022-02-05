import styled from "styled-components";

export const Text = styled.a`
  text-decoration: none;
  color: #9c9cad;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
  margin: 3px 0;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
