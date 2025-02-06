import UserContext from "../context/UserContext";
import { useContext } from "react";

const SizeGuide = () => {
  const { selectedSize, setSelectedSize } = useContext(UserContext);

  const sizes = ["S", "M", "L", "XL"];
  console.log("size", selectedSize);

  return (
    <div>
      <a className="text-black underline" href="/">
        Size Guide
      </a>
      <div className="flex items-center gap-2 mt-3">
        {sizes.map((size) => (
          <h1
            key={size}
            onClick={() => {
              setSelectedSize(size);
            }}
            className={`w-12 h-12 rounded-full border-2 flex justify-center items-center cursor-pointer 
              transition-all duration-200
              ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black"
              }
            `}
          >
            {size}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SizeGuide;
