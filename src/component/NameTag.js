import React from "react";

function NameTag(props) {
  return (
    <>
      <div className="name">
        <h3 style={props.style}>First Name: {props.firstName}</h3>
        <h3 style={props.style}>Last Name: {props.lastName}</h3>
      </div>
    </>
  );
}

export default NameTag;
