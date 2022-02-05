import Image from "next/image";
import DogOne from "../../public/dogs/dog_one.jpg";
import DogTwo from "../../public/dogs/dog_two.jpg";
import DogThree from "../../public/dogs/dog_three.jpg";
import { Container, DogCard } from "./styles";
import { Hyperlink } from "../Footer/Hyperlink";

export const Help: React.FC = () => (
  <Container>
    <DogCard>
      <Image src={DogOne} alt="Cachorro tomando banho"/>
      
      <div>
        <h2>Doe</h2>
        <p>Nos ajude doando itens de limpeza, remédios, rações, pates e demais acessórios para pet, assim podemos continuar salvando cada dia mais vidas.</p>
        <button><Hyperlink path="https://www.instagram.com/stories/highlights/17975330749174493/" name="Quero doar"/></button>
      </div>
    </DogCard>

    <DogCard>
      <div>
        <h2>Adote</h2>
        <p>Adotar é um gesto de amor! É dar a chance de um animalzinho ter uma família e a oportunidade de ser recompensado diariamente com muito amor!</p>
        <button><Hyperlink path="https://www.instagram.com/stories/highlights/17979936451242739/" name="Quero adotar"/></button>
      </div>
      
      <Image src={DogTwo} alt="Cachorro na piscina Logo"/>
    </DogCard>

    <DogCard>
      <Image src={DogThree} alt="Cachorro na piscina Logo"/>

      <div>
        <h2>Apadrinhe</h2>
        <p>Se torne um padrinho/madrinha e nos ajude a manter nosso santuário, proporcionando uma vida muito melhor para cada animalzinho resgatado.</p>
        <button><Hyperlink path="https://www.instagram.com/stories/highlights/17867618206364689/" name="Quero apadrinhar"/></button>
      </div>
    </DogCard>
  </Container>
);
