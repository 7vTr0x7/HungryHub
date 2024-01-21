import { useState } from "react";
import down from "../../utils/down.png";
import up from "../../utils/up.png";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    showItems ? setShowItems(false) : setShowItems(true);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-5 p-4 bg-gray-50 shadow-lg  rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <img src={showItems ? up : down} alt="down" className="h-4" />
          </span>
        </div>

        {showItems ? <ItemList items={data.itemCards} /> : " "}
      </div>
    </div>
  );
};

export default RestaurantCategory;
