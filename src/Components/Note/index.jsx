import { Container } from "./styles"
import { Tag } from "../Tag"
import { FiStar } from "react-icons/fi"

export function Note({ data, ...rest }) {
  let maxStarCount = 5
  let fullStarCount = data.rating //3
  let emptyStarCount = maxStarCount - fullStarCount //2

  let fullStarsList = new Array(fullStarCount).fill(true)
  let emptyStarsList = new Array(emptyStarCount).fill(false)
  let stars = fullStarsList.concat(emptyStarsList)

  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <div className="rating">
        {stars.map((star) => (
          <label>
            <FiStar className="star-rating" />
            <FiStar className="star-rating-empaty" />
            <input type="checkbox" checked={star} />
          </label>
        ))}
      </div>
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
