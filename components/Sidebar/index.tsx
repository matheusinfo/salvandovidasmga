import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaDog } from "react-icons/fa";
import { ImQuestion } from "react-icons/im";
import { ListItens } from "./ListItens";
import { Container, Bar, BarItens } from "./styles";

export const Sidebar: React.FC = () => {
  const { asPath } = useRouter();
  const [small, setSmall] = useState(true);

  const handleClick = () => {
    setSmall(!small);
  };

  return (
    <Container small={small}>
      <Bar small={small}>
        <BarItens small={small}>
          <ListItens
            title="Geral"
            path="/"
            name="Pagina inicial"
            active={asPath === "/"}
            onClick={handleClick}
          >
            <IoHome color="#f7bb00"/>
          </ListItens>

          <ListItens
            title="Sobre nós"
            path="/about"
            name="Quem somos"
            active={asPath === "/about"}
            onClick={handleClick}
          >
            <ImQuestion color="#f7bb00"/>
          </ListItens>

          <ListItens
            title="Ações"
            path="/actions"
            name="Como ajudar"
            active={asPath === "/actions"}
            onClick={handleClick}
          >
            <FaDog color="#f7bb00" />
          </ListItens>
        </BarItens>
      </Bar>
      <button onClick={handleClick}>
        {small ? (
          <GiHamburgerMenu fontSize="30px" color="#f7bb00" />
        ) : (
          <FaWindowClose fontSize="30px" color="#f7bb00" />
        )}
      </button>
    </Container>
  );
};
