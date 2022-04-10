import React from "react";
import { Card } from "antd";

const RestrauntCard = ({ name, place, rating, averagePrice }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={name} bordered style={{ width: 300 }}>
        <p>place : {place} </p>
        <p>Rating : {rating} </p>
        <p>Avergage Cost : {averagePrice} </p>
      </Card>
    </div>
  );
};

export default RestrauntCard;
