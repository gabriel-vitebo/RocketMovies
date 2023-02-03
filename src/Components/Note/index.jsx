import { Container } from "./styles"
import { Rating } from "../Rating"
import { Tag } from "../Tag"


export function Note({ data, ...rest }){
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Rating />
      <p>
        Prestes a ser coroada rainha, a Princesa Elsa descobre ter poderes sobre
        o gelo, e o quanto os que estão ao seu redor podem ficar em perigo por
        causa disso. Assustada, decide se refugiar nas montanhas. E é para lá
        que a irmã dela, Anna, parte ao seu resgate, acompanhada de um jovem
        montanhista, sua rena espirituosa e um bem-humorado boneco de neve.
      </p>
      {
      data.tags &&
      <footer>
        {
          data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
        }
      </footer>
      }
    </Container>
  )
}