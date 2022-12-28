import React from "react";
import "./solo.css"


function Card(props)
{
  const pic = `images/${props.img}`
  console.log(pic)
  return (
    <div>
      <img className="city-pic" src={pic}/>
      <div className="Main-Card">
        <div className="Card-back">
          <img className="location-icon" src="images/location.png" />
          <h6 className="city-name">{props.country}</h6>
          <h6 className="google-map">View on Google Maps</h6>
        </div>
        <h2 className="location">{props.location}</h2>
        <h3 className="date">{props.date}</h3>
        <p className="discription">{props.description}</p>
      </div>
    </div>
  )
}

export default Card