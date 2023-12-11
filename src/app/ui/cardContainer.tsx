"use client";
import React, { useState } from "react";
import { Card } from "./card";
import styles from "../ui/home.module.css";
import StatefulForm from "./statefulForm";
import { fetchData } from "../lib/data";


 const cardInitialData = [
    {
      id:'1',
      number: "2211-2112-1212-1212",
      firstName: "Hernan",
      lastName: "Lopez",
      expirationDate: "01/25",
    },
    {
      id:'2',
      number: "1211-2232-1212-2312",
      firstName: "Marta",
      lastName: "Gomez",
      expirationDate: "01/25",
    },
    {
      id:'3',
      number: "2344-1123-2234-1111",
      firstName: "Romina",
      lastName: "Leon",
      expirationDate: "01/26",
    },
  ]; 

  const CardContainer = () => {

    const [ cards, setCards ] =useState(cardInitialData)
   function handleDeleteCard (id:{id:string}){
     
      const updatedData = cards.filter(item => item.id !== id);
      setCards(updatedData)
        
      console.log(`Card ${id} eliminada`);
      return updatedData
    };


  return (
        <div>
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
                onDelete={handleDeleteCard}
              />
            ))}
        </div>
          </div>
  );
};

export default CardContainer;
