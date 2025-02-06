const SingleCart = ({ cartData }) => {
  return (
    <div>
      <div className="w-full h-[1px] bg-gray-600 mt-4"></div>
      <div className=" p-4  flex items-center gap-4">
        <img
          src={cartData.images[0]}
          alt={cartData.name}
          className="w-16 h-16 object-cover rounded-lg"
        />

        <div>
          <h3 className="text-lg font-semibold">{cartData.name}</h3>
          <p className="font-bold">${cartData.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
