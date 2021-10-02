import { Card as SemanticCard, Image, Button } from "semantic-ui-react";
import classes from "../styles/LearnMode.module.scss";

function Card({ cardStyle, ...props }) {
  console.log(cardStyle);
  return (
    <div className={`${classes.card} ${classes[cardStyle]}`}>
      <div>
        {/* <Image floated='right' size='mini' src={reactPic} alt='Test' /> */}
        <h2>Steve Sanders</h2>
        <p>Friends of Elliot</p>
        <p>
          Steve wants to add you to the group <strong>best friends</strong>
        </p>
      </div>
    </div>
  );
}

export default Card;
