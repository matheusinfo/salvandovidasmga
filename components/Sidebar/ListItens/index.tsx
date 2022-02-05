import React, { ReactNode } from "react";
import { Container, HyperLink, Button } from "./styles";
import Link from "next/link";

type ListItensProps = {
  title: string;
  path: string;
  children: ReactNode;
  name: string;
  active: boolean;
};

export const ListItens: React.FC<ListItensProps> = ({
  children,
  title,
  path,
  name,
  active,
}) => (
  <Container>
    <strong>{title}</strong>
    <Button active={active}>
      {children}
      <Link href={path} passHref>
        <HyperLink active={active}>{name}</HyperLink>
      </Link>
    </Button>
  </Container>
);
