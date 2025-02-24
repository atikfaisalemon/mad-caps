import { useState } from "react";
import { motion } from "framer-motion";

const SigleCapDtails = ({ cap }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="relative w-full mb-2 rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.img
        src={cap.images[0]}
        alt={cap.name}
        initial={{ opacity: 1 }}
        animate={{ opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute w-full h-full object-cover rounded-2xl"
      />
      <motion.img
        src={cap.images[1]}
        alt={cap.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovering ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default SigleCapDtails;
