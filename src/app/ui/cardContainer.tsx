"use client";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import styles from "../ui/home.module.css";

interface Card {
  id?: string;
  number?: string;
  firstName?: string;
  lastName?: string;
  expirationDate?: string;
}

interface Props {
  cards: Card[];
}
const CardContainer = ({ cards }) => {
  const [data, setData] = useState(cards);

  return (
    <div className={styles.cardContainer}>
      <p className={styles.title}>Tarjetas</p>
      <div className={styles.container}>
        {cards.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            number={item.number}
            firstname={item.firstName}
            lastname={item.lastName}
            expirationDate={item.expirationDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
