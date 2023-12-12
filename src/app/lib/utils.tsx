export default function formatCardNumber(numberCard) {
    const formatNumbercard = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

    if (formatNumbercard.test(numberCard)){
      return numberCard;
    }
    else {
      const maxChar = 16;
      numberCard = numberCard.replace(/[-\s]/g, "");

      if (numberCard.length > maxChar) {
        console.error("cardNumber without 16 digits");
        return numberCard.substring(0, maxChar);
      }

      const numberGroup = numberCard.match(/.{1,4}/g);

      const formated = numberGroup.join("-");

      return formated;
    }
  }
