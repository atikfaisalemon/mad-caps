import { motion } from "framer-motion";
import { useState } from "react";

const SigleCapDtails = ({ cap }) => {
  const [hovering, setHovering] = useState(false);

  console.log("cap", cap);
  return (
    <div
      className="relative w-full mb-2 rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.img
        src={cap.images[0].formats.large.url}
        alt={cap.name}
        initial={{ opacity: 1 }}
        animate={{ opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute w-full h-full object-cover rounded-2xl"
      />

      {cap.images[1] && (
        <motion.img
          src={cap.images[1].formats.large.url}
          alt={cap.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full object-cover rounded-2xl"
        />
      )}
    </div>
  );
};

export default SigleCapDtails;
