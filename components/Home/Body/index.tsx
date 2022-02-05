import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./styles";
import Logo from "../../../public/principal-logo.svg";

export const Body: React.FC = () => (
  <Container>
    <Image src={Logo} alt="SalvandoVidasMaringá Logo" />
    <strong>
      Salvando <span>Vidas</span> Maringá
    </strong>
    <small>+40k de apaixonados em salvar vidas</small>
    <button>
      <Link href="/about">Faça parte</Link>
    </button>
  </Container>
);
