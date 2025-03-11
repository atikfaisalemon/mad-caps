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
        setCap(data);
        setMainImage(data?.images[0].formats.large.url);
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

  if (loading) {
    return (
      <div className="pt-24">
        <div className="container mx-auto p-6 flex flex-col md:flex-row md:justify-between md:gap-12 mb-36">
          <div className="gap-12 flex flex-col md:flex-row">
            <div className="flex md:items-start justify-center items-center gap-2 mt-4 flex-row md:flex-col order-1 md:order-none">
              <div className="md:w-24 md:h-24 w-15 h-15 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="md:w-24 md:h-24 w-15 h-15 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="md:w-24 md:h-24 w-15 h-15 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
            <div className="flex justify-center order-0 md:order-1">
              <div className="md:w-[600px] md:h-[800px] h-90 w-90 bg-gray-200 animate-pulse rounded-2xl md:rounded-[120px]"></div>
            </div>
          </div>
          <div className="max-w-[400px]">
            <div className="md:text-2xl text-xl font-bold mb-4 mt-3 bg-gray-200 animate-pulse h-8 w-3/4"></div>
            <div className="mt-4 bg-gray-200 animate-pulse h-20 w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!cap) {
    return <h2 className="text-center text-red-500">Cap not found!</h2>;
  }

  return (
    <div>
      {/* for desktop mode */}
      <div className="pt-24">
        <div className="container mx-auto p-6 flex flex-col md:flex-row md:justify-between md:gap-12 mb-36">
          <div className="gap-12 flex flex-col md:flex-row">
            {/* Thumbnail Images */}
            <div className="flex md:items-start justify-center items-center gap-2 mt-4 flex-row md:flex-col order-1 md:order-none">
              {cap.images?.map((img, index) => (
                <img
                  key={index}
                  src={img.formats.small.url}
                  alt={`Thumbnail ${index}`}
                  className={`md:w-24 md:h-24 w-15 h-15 object-cover md:rounded-2xl rounded-md cursor-pointer ${
                    img.formats.large.url === mainImage
                      ? "border-4"
                      : "hover:border-4"
                  } `}
                  onClick={() => setMainImage(img.formats.large.url)}
                />
              ))}
            </div>

            {/* Main Image Display */}
            <div className="flex justify-center order-0 md:order-1">
              <img
                src={mainImage}
                alt={cap.name}
                className="md:w-[600px] md:h-[800px] h-90 w-90 object-cover rounded-2xl md:rounded-[120px] shadow-lg"
              />
            </div>
          </div>

          <div className="max-w-[400px]">
            <h2 className="md:text-2xl text-xl font-bold mb-4 mt-3">
              {cap.name}
            </h2>
            <AddToCart cap={{ cap }} />
            {/* Description & Price */}
            <p className="mt-4 text-gray-600">{cap.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapDetails;
