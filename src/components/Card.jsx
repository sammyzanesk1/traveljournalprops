import { MdLocationPin } from "react-icons/md";
export default function Card(props) {
  console.log(props);
  return (
    <div className="cardbox">
      <img src={props.ImageUrl} className="cardimage" />
      <div className="cardwriteup">
        <div className="locationbox">
          <MdLocationPin color=" #e63946" size="1.4rem" />
          <span className="locationcountry gray">{props.location}</span>
          <span className="locationlink gray">View on google Maps</span>
        </div>
        <h1 className="location">{props.title}</h1>
        <p className="carddate">
          {props.startDate} till {props.endDate}
        </p>
        <span className="cardtext">{props.description}</span>
      </div>
    </div>
  );
}
