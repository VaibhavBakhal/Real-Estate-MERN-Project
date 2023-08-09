import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart r-card"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      <img src={card.image} alt="home" />
      <Heart id={card?.id} size={25}></Heart>
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">
        {_.truncate(card.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {_.truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
