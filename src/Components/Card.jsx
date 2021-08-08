import React from "react";
import Astra from "./Astra";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.id}</h2>
        <h2 className="name">{props.name}</h2>
        <Astra img={props.img} />
      </div>
      <div className="bottom">
        <Detail Detailinfo={props.tel} />
        <Detail Detailinfo={props.email} />
      </div>
    </div>
  );
}
export default Card;
