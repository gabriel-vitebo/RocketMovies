import { Input } from "../Input"
import { Container, Profile, Exit } from "./styles"
import { useAuth } from "../../hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import avatarPlaceHolder from "../../assets/empaty-profile.svg"

export function Header({ onChangeSourceInput }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder

  return (
    <Container>
      <h1>RocketMovies</h1>
      <div className="setInput">
        <Input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={(e) => onChangeSourceInput(e.target.value)}
        />
      </div>
      <Profile>
        <div className="setProfile">
          <Link to="/profile">
            <h2>{user.name}</h2>
          </Link>
          <Exit type="button" onClick={handleSignOut}>
            Sair
          </Exit>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  )
}
