import { useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import SigleCapDtails from "./SigleCapDtails";
import UserContext from "../context/UserContext";
import { motion } from "framer-motion";

function CapList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { query } = useContext(UserContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}/api/products?populate=*`
        );
        const { data } = await response.json();
        const filterData = data.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );

        setData(filterData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="mt-50 md:mx-19 ">
        <div className="text-3xl font-semibold flex justify-center pb-24">
          <h1>&quot;{query}&quot;</h1>
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col ">
          {data.length > 0 ? (
            data.map((cap, index) => (
              <motion.div
                key={cap.documentId}
                onClick={() => navigate(`/product/${cap.documentId}`)}
                className="p-4 rounded h-[600px] cursor-pointer"
                initial={{ opacity: 0, y: 50 }} // Starts slightly below and invisible
                animate={{ opacity: 1, y: 0 }} // Moves to original position
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2, // Delay each item based on its index
                }}
              >
                <SigleCapDtails cap={cap} />
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-xl font-semibold">{cap.name}</h3>
                  <p className="text-xl">{cap.price} TK</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center md:text-center text-gray-500 text-xl">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CapList;
