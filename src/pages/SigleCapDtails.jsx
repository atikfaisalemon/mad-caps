import { useState } from "react";
const SigleCapDtails = ({ cap }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <img
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      src={hovering ? cap.images[1] : cap.images[0]}
      alt={cap.name}
      className="w-full  object-cover mb-2"
    />
  );
};

export default SigleCapDtails;
