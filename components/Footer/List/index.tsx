import React, { ReactNode } from "react";
import { Container } from "./styles";

type ListProps = {
  children: ReactNode;
  title: string;
};

export const List: React.FC<ListProps> = ({ children, title }) => (
  <Container>
    <strong>{title}</strong>
    {children}
  </Container>
);
