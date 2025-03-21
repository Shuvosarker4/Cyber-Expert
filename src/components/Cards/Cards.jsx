import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ selectHandler }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("expert.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {cards.map((card, idx) => (
        <Card key={idx} card={card} selectHandler={selectHandler}></Card>
      ))}
    </div>
  );
};

export default Cards;
