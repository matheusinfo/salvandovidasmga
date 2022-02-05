import React from "react";
import Image from 'next/image'
import { Container } from "./styles";
import ImageLogo from '../../../public/logo.svg'


export const Logo: React.FC = () => (
  <Container>
    <Image src={ImageLogo} alt="SalvandoVidasMaringá Logo" width={90} height={90} />
  </Container>
);
