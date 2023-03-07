import { Container } from "./styles"
import { FiStar } from "react-icons/fi"

export function Rating() {
  return (
    <Container>
      <label>
        <FiStar className="star-rating" />
        <FiStar className="star-rating-empaty" />
        <input type="radio" name="rating" id="rating1" />
      </label>
      <label>
        <FiStar className="star-rating" />
        <FiStar className="star-rating-empaty" />
        <input type="radio" name="rating" id="rating2" />
      </label>
      <label>
        <FiStar className="star-rating" />
        <FiStar className="star-rating-empaty" />
        <input type="radio" name="rating" id="rating3" />
      </label>
      <label>
        <FiStar className="star-rating" />
        <FiStar className="star-rating-empaty" />
        <input type="radio" name="rating" id="rating4" />
      </label>
      <label>
        <FiStar className="star-rating" />
        <FiStar className="star-rating-empaty" />
        <input type="radio" name="rating" id="rating5" />
      </label>
    </Container>
  )
}
