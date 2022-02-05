import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  position: relative;
  height: 150px;
  margin-top: 50px;
  width: 100%;
`;

export const DogCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 700px;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 600px;
    height: 300px;
  }

  @media (max-width: 600px) {
    width: 380px;
    height: 230px;
  }

  img {
    width: 700px;
    height: 300px;
    border-radius: 4px;
  }

  > div {
    margin-left: 50px;

    @media (max-width: 600px) {
      margin-left: 20px;
    }

    h2 {
      font-size: 30px;

      @media (max-width: 700px) {
        font-size: 20px;
      }

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }

    p {
      font-size: 16px;
      margin-right: 50px;

      @media (max-width: 700px) {
        font-size: 14px;
      }

      @media (max-width: 600px) {
        font-size: 12px;
        margin-right: 20px;
      }
    }

    button {
      color: #fff;
      background-color: #f7bb00;
      height: 40px;
      width: 130px;
      margin-top: 30px;
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
        font-size: 16px;

        @media (max-width: 700px) {
          font-size: 12px;
        }

        @media (max-width: 600px) {
          font-size: 10px;
        }
      }

      :hover {
        opacity: 0.7;
      }

      @media (max-width: 700px) {
        height: 30px;
        width: 100px;
        font-size: 12px;
      }

      @media (max-width: 600px) {
        height: 25px;
        width: 90px;
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
`;
