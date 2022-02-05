import React from "react";
import { Logo } from "./Logo";
import { List } from "./List";
import { Hyperlink } from "./Hyperlink";
import { Container } from "./styles";

export const Footer: React.FC = () => (
  <Container>
    <div>
      <Logo />
      <List title="Nossas redes">
        <Hyperlink
          name="Instagram"
          path="https://www.instagram.com/salvandovidasmaringa/"
        />
        <Hyperlink
          name="Facebook"
          path="https://www.facebook.com/salvandovidasmaringa/"
        />
        <Hyperlink
          name="Linktree"
          path="https://linktr.ee/salvandovidas.maringa"
        />
      </List>
      <List title="Sobre nós">
        <Hyperlink
          name="Santuário"
          path="https://www.instagram.com/stories/highlights/17981119072332649/"
        />
        <Hyperlink
          name="Eventos"
          path="https://www.instagram.com/stories/highlights/18051928291067771/"
        />
        <Hyperlink
          name="Parcerias"
          path="https://www.instagram.com/stories/highlights/18018047647171830/"
        />
      </List>
      <List title="Ajude">
        <Hyperlink
          name="Doe"
          path="https://www.instagram.com/stories/highlights/17975330749174493/"
        />
        <Hyperlink
          name="Adote"
          path="https://www.instagram.com/stories/highlights/17979936451242739/"
        />
        <Hyperlink
          name="Apadrinhe"
          path="https://www.instagram.com/stories/highlights/17867618206364689/"
        />
      </List>
    </div>
    <footer>
      Copyrights ® 2022 Salvando Vidas Maringá. Todos direitos reservados.
    </footer>
  </Container>
);
