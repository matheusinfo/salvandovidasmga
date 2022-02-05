import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 150px;
  z-index: 1;
  margin-top: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 200px;
    width: 200px;
  }

  p {
    margin: 15px auto 25px auto;
    max-width: 600px;
    font-size: 18px;

    @media (max-width: 700px) {
      width: 500px;
      font-size: 16px;
    }

    @media (max-width: 600px) {
      width: 400px;
      font-size: 16px;
    }

    @media (max-width: 500px) {
      width: 300px;
      font-size: 14px;
    }
  }

  video {
    width: 75%;
  }

  span {
    margin: 25px 0;
    color: #f7bb00;
    font-weight: bolder;
  }

  button {
    color: #fff;
    background-color: #f7bb00;
    height: 40px;
    width: 120px;
    margin-top: 20px;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.5s;
    margin-bottom: 50px;
    z-index: 1;

    a {
      color: #fff;
      text-decoration: none;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;
