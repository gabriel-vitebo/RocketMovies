import { Header } from "../../Components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { TextButton } from "../../Components/TextButton"
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { Container, Content, Span, CreatedAt } from "./styles"

export function Details(){
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <TextButton title="voltar" icon={FiArrowLeft} />
          <section>
            <div className="title-movie">
              <h1>Frozen</h1>
              
            </div>
            <div className="info-user-movie">
              <img src="" alt="Foto do usuário" />
              <Span />
              <CreatedAt />
            </div>
          </section>
          <Section>
            <Tag title="Comédia" />
            <Tag title="Animação" />
            <Tag title="3D" />
          </Section>
          <p>
            Prestes a ser coroada rainha, a Princesa Elsa descobre ter poderes
            sobre o gelo, e o quanto os que estão ao seu redor podem ficar em
            perigo por causa disso. Assustada, decide se refugiar nas montanhas.
            E é para lá que a irmã dela, Anna, parte ao seu resgate, acompanhada
            de um jovem montanhista, sua rena espirituosa e um bem-humorado
            boneco de neve.
          </p>
        </Content>
      </main>
    </Container>
  )
}