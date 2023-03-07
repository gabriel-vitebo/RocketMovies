import { Container } from "./styles"
import { FiStar } from "react-icons/fi"

export function Rating({ star }) {
  return (
    <Container>
      <label>
        <FiStar className="star-rating" />
        <FiStar className="star-rating-empaty" />
        <input type="checkbox" checked={star} readOnly />
      </label>
    </Container>
  )
}
