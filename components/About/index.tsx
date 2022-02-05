import { Hyperlink } from "../Footer/Hyperlink";
import { Container, Content } from "./styles";
import Image from "next/image";
import Logo from "../../public/principal-logo.svg";

export const About: React.FC = () => (
  <Container>
     <Content>
        <Image src={Logo} alt="SalvandoVidasMaringá Logo" />
        <p>Nosso santuário é um lugar sagrado para os animais, maior e mais estruturado para o cuidado, adoção, visitação e educação ambiental de crianças e famílias</p>
        <video src="https://video-iad3-2.xx.fbcdn.net/v/t39.25447-2/267830431_1361531764262566_5433557568032643420_n.mp4?_nc_cat=103&vs=cce6d50ef019c4db&_nc_vs=HBksFQAYJEdKLUU5Z19teGloUlR0WUVBRnlaT09YUjMyZExibWRqQUFBRhUAAsgBABUAGCRHQTY2T0FZdEFYeEh5M0lEQU9nOUVLVmJ0THBtYnY0R0FBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm0K3hpNmzehUCKAJDMxgLdnRzX3ByZXZpZXccF0BOBR64UeuFGCdkYXNoX2dlbjNiYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCIgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zDTE2NDQwODA5OTc3NDUMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAQ5MDc0DG9lbV92aWRlb19pZA8yNjkxNjkwMDQ0Mjk3OTkSb2VtX3ZpZGVvX2Fzc2V0X2lkDzI2OTE2ODk5Nzc2MzEzMxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjY5MTY4OTk0NDI5ODAwHG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNDE1NzcxNDQ2ODk3NDQ2JQIcACXEARsHiAFzBDQ0ODYCY2QKMjAyMC0wNi0yMwNyY2IEOTAwMANhcHAJSW5zdGFncmFtAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwY2MC4xMTcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-5&_nc_sid=edb743&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=8KK2CKZk4WUAX-CEoYm&_nc_ht=video-iad3-2.xx&edm=AGo2L-IEAAAA&oh=00_AT_2GeMz24Aq9LCndQibH6-UqD2g_YQwYXnc6D2LSEAOaw&oe=62033085&_nc_rid=2eaa7343d7ce41b" controls/>
        <span>Adote um amigo, salve uma vida</span>
        <button><Hyperlink path="https://www.instagram.com/salvandovidasmaringa/" name="Ver mais"/></button>
     </Content>
  </Container>
);
