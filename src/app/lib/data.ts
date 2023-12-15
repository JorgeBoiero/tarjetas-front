import axios from 'axios';

export const cardInitialData = [
  {
    id: "1",
    number: "2211-2112-1212-1212",
    firstName: "Hernan",
    lastName: "Lopez",
    expirationDate: "01/25",
  },
  {
    id: "2",
    number: "1211-2232-1212-2312",
    firstName: "Marta",
    lastName: "Gomez",
    expirationDate: "01/25",
  },
  {
    id: "3",
    number: "2344-1123-2234-1111",
    firstName: "Romina",
    lastName: "Leon",
    expirationDate: "01/26",
  },
];

export async function getCards() {
  try {
    //Comentar, solo se agrego este setTimeout para probar el suspense
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await axios.get('http://localhost:3000/cards');
    return response.data;

  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}