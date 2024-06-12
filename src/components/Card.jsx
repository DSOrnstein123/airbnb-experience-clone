import { getImageURL } from "../utils/insert-img.js";
import star from "../imgs/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}

      <img className="card-img" src={getImageURL(props.coverImg)} alt="img" />

      <div className="card-stats">
        <img className="card-stats-star" src={star} alt="star" />

        <span>{props.stats.rating}</span>
        <span className="grey"> ({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>

      <p className="card-title">{props.title}</p>

      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
