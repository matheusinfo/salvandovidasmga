import styled from "styled-components";

type ActiveProps = {
  active: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  overflow: hidden;

  strong {
    text-transform: uppercase;
    font-size: 16x;
    letter-spacing: 0.4px;
    color: #575761;
    margin-bottom: 15px;
  }
`;

export const HyperLink = styled.a<ActiveProps>`
  color: ${(props) => (!props.active ? "#fff" : "#f7bb00")};
  text-decoration: none;
  font-size: 14px;
  margin-left: 10px;
  font-weight: 600;
  width: 100px;
`;

export const Button = styled.button<ActiveProps>`
  display: flex;
  background: transparent;
  border: 0;
  color: ${(props) => (!props.active ? "#fff" : "#f7bb00")};
  transition: all 0.3s;

  svg {
    font-size: 18px;
  }

  :hover {
    color: #f7bb00;
  }
`;
