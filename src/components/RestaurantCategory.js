import down from "../../utils/down.png";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {

  return (
    <div>
      <div className="w-6/12 mx-auto my-5 p-4 bg-gray-50 shadow-lg  rounded-lg">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>
            <img src={down} alt="down" className="h-4" />
          </span>
        </div>

        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
