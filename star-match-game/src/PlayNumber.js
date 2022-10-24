import { utils, colors } from "./utils";

const PlayNumber = (props) => (
  <button className="number"
  style={{backgroundColor: colors[props.status]}}
   onClick={() => console.log("num:", props.number)}>
    {props.number}
  </button>
);
export default PlayNumber;
