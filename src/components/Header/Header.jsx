import { useState } from "react";
import Cards from "../Cards/Cards";
import Course from "../Course/Course";

const Header = () => {
  const [cost, setCost] = useState(0);
  const [cart, setCart] = useState([]);
  const selectHandler = (card) => {
    let salary = cost + card.salary;
    setCost(salary);
    setCart([...cart, card]);
  };
  return (
    <div>
      <div className="text-center space-y-3 p-8 bg-amber-100 rounded-2xl w-[1000px] mx-auto">
        <h1 className="text-3xl text-center mt-2 font-bold">
          Become a Cyber Security Expert Protect, Defend, Secure!
        </h1>
        <p className="text-xl">
          Digital Forensics & Incident Response Investigate, analyze, and
          mitigate cyber crimes
        </p>
        <h1 className="text-3xl">
          Total Budget: <b>10 Million</b>
        </h1>
      </div>
      <div className="flex  flex-col lg:flex-row">
        <Cards selectHandler={selectHandler} />
        <Course cost={cost} cart={cart} />
      </div>
    </div>
  );
};

export default Header;
