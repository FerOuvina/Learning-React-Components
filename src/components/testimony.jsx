import React from 'react';
import '../stylesheets/testimony.css'

function Testimony(props) {
  return (
    <div className="testimony__container">
      <img className="testimony__container--img" 
      src={require(`../img/Testimony-${props.img}.jpg`)} />

      <div className="textimony__container--card">
        <p className="testimony__container--name"><strong>{props.name}</strong> from {props.country}</p>
        <p className="testimony__container--job">{props.job} in <strong>{props.company}</strong></p>
        <p className="testimony__container--text">{props.testimony}</p>
      </div>
    </div>
  );
};

export default Testimony;