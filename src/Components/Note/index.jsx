import { Container } from "./styles"
import { Tag } from "../Tag"
import { Rating } from "../Rating"

export function Note({ data, ...rest }) {
  let maxStarCount = 5
  let fullStarCount = data.rating
  let emptyStarCount = maxStarCount - fullStarCount

  let fullStarsList = new Array(fullStarCount).fill(true)
  let emptyStarsList = new Array(emptyStarCount).fill(false)
  let stars = fullStarsList.concat(emptyStarsList)
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <div className="rating">
        {stars.map((star) => (
          <Rating star={star} />
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
