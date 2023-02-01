import { Container } from "./styles"

export function TextButton({icon: Icon, title, isActive = false, ...rest}){
  return(
    <Container
      type="button"
      isActive={isActive}
      {...rest}
    >
      {Icon && < Icon size={20} />}
      {title}
    </Container>
  )
}