import { Header } from "../../Components/Header"
import { FiArrowLeft, FiStar } from "react-icons/fi"
import { TextButton } from "../../Components/TextButton"
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { Container, Content } from "./styles"
import { Span } from "../../Components/Span"

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
              <label>
                < FiStar className="star-rating"/>
                < FiStar className="star-rating-empaty"/>
                <input type="radio" name="rating" id="rating1" />
              </label>
              <label>
                <input type="radio" name="rating" id="rating2" />
              </label>
              <label>
                <input type="radio" name="rating" id="rating3" />
              </label>
              <label>
                <input type="radio" name="rating" id="rating4" />
              </label>
              <label>
                <input type="radio" name="rating" id="rating5" />
              </label>
            </div>
            <div className="info-user-movie">
              <img
                src="https://github.com/gabriel-vitebo.png"
                alt="Foto do usuário"
              />
              <Span title="Gabriel Vitebo" />
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