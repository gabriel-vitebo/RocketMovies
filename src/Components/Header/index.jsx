import { Input } from "../Input"
import{ Container, Profile } from "./styles"

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input type="title" placeholder="Pesquisar pelo título" />
      <Profile>
        <img src="https://github.com/gabriel-vitebo.png" alt="Foto de perfil do usuário" />
        <div>
          <strong>Gabriel Vitebo</strong>
          <button>Sair</button>
        </div>
      </Profile>
    </Container>
  )
}