import classes from "../styles/LearnMode.module.scss";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DUMMY_LEARNINGS = [
  {
    id: 1,
    header: "Project Report - April",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    meta: "ROI: 30%",
  },
  {
    id: 2,
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
  {
    id: 3,
    header: "Project Report - June",
    description:
      "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
    meta: "ROI: 27%",
  },
];

function LearnMode() {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    console.log(index);
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };
  const slideRight = () => {
    if (index + 1 <= DUMMY_LEARNINGS.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <div className={classes.carousel}>
        <div className={classes["card-container"]}>
          <div className={classes.block}></div>

          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={slideLeft}
            className={classes.leftIcon}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={slideRight}
            className={classes.rightIcon}
          />
          {DUMMY_LEARNINGS.map((card, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return <Card key={card.id} {...card} cardStyle={position} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default LearnMode;
