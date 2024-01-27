import { IMG_URL } from "../../utils/url";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-8 text-left  flex justify-between ">
          <div className="w-9/12">
            <div className="py-2 font-bold ">
              <span>{item.card.info.name}</span>
            </div>
            <div className="pb-2 font-bold">
              <span>
                ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>

            <p className="text-xs text-black">
              {item.card.info.description
                ? item.card.info.description
                : item.card.info.category}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <img
              src={IMG_URL + item.card.info.imageId}
              className="w-full h-32"
            />
            <div className="absolute">
              <button className="p-2 mx-8 relative bottom-4 rounded-lg  bg-white shadow-lg font-bold ">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
