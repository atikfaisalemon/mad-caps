import { useState } from "react";
import { useParams } from "react-router";
import Data from "../Data.json";
const CapDetails = () => {
  const data = Data;
  const { id } = useParams(); // Get cap ID from URL
  const cap = data.find((c) => c.id === parseInt(id)); // Find cap by ID

  // Set the main image (default to the first image)
  const [mainImage, setMainImage] = useState(cap?.images[0] || "");

  if (!cap) {
    return <h2 className="text-center text-red-500">Cap not found!</h2>;
  }
  return (
    <div>
      <div className="container mx-auto p-6 flex flex-row justify-between gap-12 mb-36">
        <div className="gap-12 flex flex-row">
          {/* Thumbnail Images */}
          <div className="flex items-start gap-2 mt-4 flex-col">
            {cap.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-24 h-24 object-cover rounded-2xl cursor-pointer hover:border-4"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          {/* Main Image Display */}
          <div className="flex justify-center  ">
            <img
              src={mainImage}
              alt={cap.name}
              className="w-[600px] h-[800px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{cap.name}</h2>

          {/* Description & Price */}
          <p className="mt-4 text-gray-600">{cap.description}</p>
          <p className="text-lg font-bold text-blue-600 mt-2">${cap.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CapDetails;
