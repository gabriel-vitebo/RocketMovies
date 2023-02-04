import { Input } from "../Input"
import { Link } from "react-router-dom"
import{ Container, Profile} from "./styles"

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>
      <div className="setInput">
        <Input type="text" placeholder="Pesquisar pelo título" />
      </div>
      <Profile to="/profile">
        <div className="setProfile">
          <h2>Gabriel Vitebo</h2>
          <Link to="/">
            <button className="exit">Sair</button>
          </Link>
        </div>
        <img
          src="https://github.com/gabriel-vitebo.png"
          alt="Foto de perfil do usuário"
        />
      </Profile>
    </Container>
  )
}