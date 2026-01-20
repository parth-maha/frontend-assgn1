import React from "react";
import { MdDelete } from "react-icons/md";

interface Item {
  name: string;
  price: number;
  category: string;
  quantity: number;
}

interface CardProps {
  item: Item;
  onRemove: (item: Item) => void;
}

const Card: React.FC<CardProps> = ({ item, onRemove }) => {
  if (!item) {
    return <div className="text-center p-3">Out of Stock</div>;
  }
  return (
    <div className="border border-gray-300 rounded-lg p-6 w-52 bg-white shadow-sm flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <div className="">
        {item.price >= 500 ? (
          <p className="text-green-500 font-semibold text-sm">
            ${item.price}{" "}
            <span className="ml-1 text-white p-1 text-xs bg-cyan-400 rounded-sm">
              {" "}
              Premium
            </span>
          </p>
        ) : (
          <p className="text-green-500">${item.price}</p>
        )}
      </div>
      <p className="text-black font-light">
        {item.quantity < 5 ? (
          <p className="text-black font-semibold text-sm">
            {item.quantity}{" "}
            <span className="ml-1 text-white text-xs p-1 bg-orange-500 rounded-sm">
              {" "}
              Limited Quantity
            </span>
          </p>
        ) : (
          <p>{item.quantity}</p>
        )}
      </p>
      <p className="text-gray-600 text-sm">{item.category.toUpperCase()}</p>
      <button
        onClick={() => onRemove(item)}
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded w-fit items-center gap-1"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default Card;
