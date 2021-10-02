import { Card as SemanticCard, Image, Button } from "semantic-ui-react";
import classes from "../styles/LearnMode.module.scss";

function Card({ cardStyle, header, description, meta }) {
  console.log(cardStyle);
  return (
    <div className={`${classes.card} ${classes[cardStyle]}`}>
      <div>
        {/* <Image floated='right' size='mini' src={reactPic} alt='Test' /> */}
        <h2>{header}</h2>
        <p>{description}</p>
        <p>{meta}</p>
      </div>
    </div>
  );
}

export default Card;
