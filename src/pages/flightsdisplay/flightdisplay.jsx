import React, { useContext } from "react";
import Flightcard from "./flightcard";
import details from "./flightdetails";
import { Info } from "../../Helper/helper";
const Createflight =() => {
  return (
    <Flightcard
      key={details.id}
      flightname={details.flightname}
      flightnum={details.flightnum}
      img={details.img}
      starttime={details.starttime}
      startingcity={details.from}
      duration={details.duration}
      layovers={details.layovers}
      endtime={details.endtime}
      endcity={details.endcity}
      price={details.price}
    />
  );
}
function Flightsdisplay() {
  const {allInf,setAllInf} = useContext(Info);
  return (
    details.map(Flightcard)
  );
}
export default Flightsdisplay;
