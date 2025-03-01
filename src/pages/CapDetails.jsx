import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AddToCart from "./AddToCart";
const CapDetails = () => {
  const { id } = useParams(); // Get cap ID from URL
  const [cap, setCap] = useState();
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(""); // Set the main image (default to the first image)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}/api/products/${id}?populate=*`
        );
        const { data } = await response.json();
        console.log("first", data);
        setCap(data);

        setMainImage(cap?.images[0].formats.large.url);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);
  useEffect(() => {
    if (cap?.images && cap.images.length > 0) {
      setMainImage(cap.images[0].formats.large.url);
    }
  }, [cap]);
  console.log("params", id);
  console.log("Fetched data", cap);

  if (!cap) {
    return <h2 className="text-center text-red-500">Cap not found!</h2>;
  }
  console.log("first", cap);
  return (
    <div className="pt-24">
      <div className="container mx-auto p-6 flex flex-row justify-between gap-12 mb-36">
        <div className="gap-12 flex flex-row">
          {/* Thumbnail Images */}
          <div className="flex items-start gap-2 mt-4 flex-col">
            {cap.images?.map((img, index) => (
              <img
                key={index}
                src={img.formats.small.url}
                alt={`Thumbnail ${index}`}
                className={`w-24 h-24 object-cover rounded-2xl cursor-pointer ${
                  img.formats.large.url === mainImage
                    ? "border-4"
                    : "hover:border-4"
                } `}
                onClick={() => setMainImage(img.formats.large.url)}
              />
            ))}
          </div>
          {/* Main Image Display */}
          <div className="flex justify-center">
            <img
              src={mainImage}
              alt={cap.name}
              className="w-[600px] h-[800px] object-cover rounded-[120x] shadow-lg"
            />
          </div>
        </div>
        <div className="max-w-[400px]">
          <h2 className="text-2xl font-bold mb-4">{cap.name}</h2>
          <AddToCart cap={{ cap }} />
          {/* Description & Price */}
          <p className="mt-4 text-gray-600">{cap.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CapDetails;
