import QuantityButton from "./QuantityButton";
const SingleCart = ({ cartData }) => {
  return (
    <div>
      <div className="w-full h-[1px] bg-gray-600 mt-4"></div>
      <div className=" p-4  flex items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-6">
          <img
            className="border-2 rounded-full w-9 h-9 "
            src="./x.png"
            alt=""
          />
          <img
            src={cartData.images[0]}
            alt={cartData.name}
            className="w-30 h-30 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold">{cartData.name}</h3>
        </div>

        <div className="flex flex-row items-center">
          <p className="font-bold">${cartData.price}</p>
          <QuantityButton />
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
