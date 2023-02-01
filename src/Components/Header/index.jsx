import { Input } from "../Input"
import{ Container, Profile } from "./styles"

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>
      <div className="setInput">
        <Input type="text" placeholder="Pesquisar pelo título" />
      </div>
      <Profile>
        <div className="setProfile">
          <h2>Gabriel Vitebo</h2>
          <button>Sair</button>
        </div>
        <img
          src="https://github.com/gabriel-vitebo.png"
          alt="Foto de perfil do usuário"
        />
      </Profile>
    </Container>
  )
}