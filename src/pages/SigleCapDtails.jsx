import { useState } from "react";
const SigleCapDtails = ({ cap }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <img
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      src={hovering ? cap.images[1] : cap.images[0]}
      alt={cap.name}
      className="w-full hover:border-2  object-cover mb-2 rounded-2xl"
    />
  );
};

export default SigleCapDtails;
