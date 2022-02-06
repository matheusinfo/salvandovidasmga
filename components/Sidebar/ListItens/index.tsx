import React, { ReactNode } from "react";
import { Container, HyperLink, Button } from "./styles";
import Link from "next/link";

type ListItensProps = {
  title: string;
  path: string;
  children: ReactNode;
  name: string;
  active: boolean;
  onClick: () => void;
};

export const ListItens: React.FC<ListItensProps> = ({
  children,
  title,
  path,
  name,
  active,
  onClick
}) => (
  <Container>
    <strong>{title}</strong>
    <Button active={active} onClick={onClick}>
      {children}
      <Link href={path} passHref>
        <HyperLink active={active}>{name}</HyperLink>
      </Link>
    </Button>
  </Container>
);
