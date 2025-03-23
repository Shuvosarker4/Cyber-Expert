import React from "react";

const Card = ({ card, selectHandler }) => {
  const { name, age, designation, address, img, salary } = card;
  return (
    <div className="w-[310px] my-2 bg-white shadow-lg rounded-2xl p-4 text-center border">
      <img
        src={img}
        alt="Profile"
        className="w-34 h-34 mx-auto rounded-full border-4 border-gray-200"
      />

      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600 font-semibold">
        <b>Age :</b> {age}
      </p>
      <p className="text-gray-600 font-semibold">
        <b>Destination:</b>
        {designation}
      </p>
      <p className="text-gray-600 font-semibold">
        <b>Address:</b> {address}
      </p>
      <p className="text-gray-700 font-semibold">
        <b>Salary: $</b>
        {salary}/year
      </p>

      <button
        onClick={() => selectHandler(card)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Add to List
      </button>
    </div>
  );
};

export default Card;
