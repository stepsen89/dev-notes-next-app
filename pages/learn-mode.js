import classes from "../styles/LearnMode.module.scss";
import Card from "../components/Card";

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
  return (
    <div>
      <div className={classes.carousel}>
        {DUMMY_LEARNINGS.map((card, index) => {
          let position =
            index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard";
          return <Card key={card.id} {...card} cardStyle={position} />;
        })}
      </div>
    </div>
  );
}

export default LearnMode;
