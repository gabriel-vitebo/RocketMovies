import { Input } from "../Input"
import { Container, Profile, Exit } from "./styles"
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom"

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>
      <h1>RocketMovies</h1>
      <div className="setInput">
        <Input type="text" placeholder="Pesquisar pelo título" />
      </div>
      <Profile>
        <div className="setProfile">
          <Link to="/profile">
            <h2>Gabriel Vitebo</h2>
          </Link>
          <Exit type="button" onClick={signOut}>
            Sair
          </Exit>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/gabriel-vitebo.png"
            alt="Foto de perfil do usuário"
          />
        </Link>
      </Profile>
    </Container>
  )
}
