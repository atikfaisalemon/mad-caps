import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import SigleCapDtails from "./SigleCapDtails";

function CapList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}/api/products?populate=*`
        );
        const data = await response.json();

        setData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="mt-24">
        {/* Adjust grid for different screen sizes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="p-4 rounded animate-pulse">
                  <div className="w-full h-40 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))
            : data.map((cap) => (
                <div
                  key={cap.documentId}
                  onClick={() => {
                    navigate(`/product/${cap.documentId}`);
                  }}
                  className="p-4 rounded"
                >
                  <SigleCapDtails cap={cap} />
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-xl font-semibold">{cap.name}</h3>
                    <p className="text-xl font-[3px]">{cap.price} TK</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default CapList;
