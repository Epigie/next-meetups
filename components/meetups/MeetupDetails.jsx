import Card from "../ui/Card";
import classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <section className={classes.detail}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
      </Card>
    </section>
  );
};

export default MeetupDetails;
