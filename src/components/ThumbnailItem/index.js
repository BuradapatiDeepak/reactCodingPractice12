// Write your code here
import './index.css'

const ThumbnailItem = props => {
  const {singleImage, clickImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = singleImage
  const onClickImage = () => {
    clickImage(id)
  }
  const activeImage = isActive ? 'active' : ''
  return (
    <li className="list">
      <button type="button" className="button">
        <img
          onClick={onClickImage}
          alt={thumbnailAltText}
          className={`imageAltText ${activeImage}`}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
