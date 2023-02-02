import { Container } from "./styles"

export function Span({title, ...rest}) {
  return(
    <Container {...rest}>
      por {title}
    </Container>
  )
}