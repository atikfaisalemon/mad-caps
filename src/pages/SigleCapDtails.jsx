import { motion } from "framer-motion";
import { useState } from "react";

const SingleCapDetails = ({ cap }) => {
  const [hovering, setHovering] = useState(false);

  // Ensure images exist and fallback to an empty array if undefined
  const images = cap.images?.map((img) => img.formats.large.url) || [];

  return (
    <div
      className="relative w-full mb-2 rounded-2xl overflow-hidden flex justify-center items-center bg-gray-100"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {images.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No images available</p>
      ) : (
        <>
          {/* First Image (Always Visible) */}
          <motion.img
            src={images[0]}
            alt={cap.name}
            initial={{ opacity: 1 }}
            animate={{ opacity: images.length > 1 && hovering ? 0 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover rounded-2xl"
          />

          {/* Second Image (Only if there are two images) */}
          {images.length > 1 && (
            <motion.img
              src={images[1]}
              alt={cap.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: hovering ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
        </>
      )}
    </div>
  );
};

export default SingleCapDetails;
