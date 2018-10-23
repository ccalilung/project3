import React from 'react'

const Cards = (props) => (
    <div className="card">
  <img className="card-img-top cardImage" src={props.src} alt="Card image cap" />
  <div className="card-body text-center rounded">
    <h5 className="card-title text-center">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href={props.redirect} className="btn text-center text-white btn-dark">{props.title}</a>
  </div>
</div>
)

export default Cards;