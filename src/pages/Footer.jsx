import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const shapes = ["square", "rectangle", "diamond", "parallelogram"];
const footerColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-yellow-500",
];
const shapeColors = [
  "bg-blue-500",
  "bg-pink-500",
  "bg-gray-500",
  "bg-orange-500",
];

const Footer = () => {
  const [randomShape, setRandomShape] = useState("");
  const [randomShapeColor, setRandomShapeColor] = useState("");
  const [randomFooterBg, setRandomFooterBg] = useState("");

  useEffect(() => {
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const shapeColor =
      shapeColors[Math.floor(Math.random() * shapeColors.length)];
    const footerBg =
      footerColors[Math.floor(Math.random() * footerColors.length)];

    setRandomShape(shape);
    setRandomShapeColor(shapeColor);
    setRandomFooterBg(footerBg);
  }, []);

  return (
    <div className={`flex flex-col h-full w-full ${randomFooterBg} p-24`}>
      <div className="flex justify-start">
        <div className="flex items-center md:flex-row flex-col md:justify-evenly w-full text-3xl">
          {/* Random Shape */}
          <div
            className={`flex items-center justify-center font-bold text-center text-white ${randomShapeColor} 
              ${randomShape === "square" ? "md:w-[250px] md:h-[250px]" : ""}
              ${randomShape === "rectangle" ? "md:w-[300px] md:h-[150px]" : ""}
              ${
                randomShape === "diamond"
                  ? "md:w-[200px] md:h-[200px] rotate-45"
                  : ""
              }
              ${
                randomShape === "parallelogram"
                  ? "md:w-[250px] md:h-[150px] skew-x-12"
                  : ""
              }
            `}
          >
            THE MAD CAPS
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }} // Start position (50px down) and opacity (hidden)
            whileInView={{ y: 0, opacity: 1 }} // End position (original position) and opacity (visible)
            viewport={{ once: false }} // Trigger animation every time the element comes into view
            transition={{
              duration: 1, // Duration of the animation
              ease: "easeOut", // Smooth easing effect
            }}
          >
            <h1 className="text-4xl md:max-w-[200px]">OBJECTS THAT INSPIRE.</h1>
          </motion.div>

          <div className="flex flex-row justify-between text-sm gap-24">
            <motion.div
              initial={{ y: 50, opacity: 0 }} // Start position (50px down) and opacity (hidden)
              whileInView={{ y: 0, opacity: 1 }} // End position (original position) and opacity (visible)
              viewport={{ once: false }} // Trigger animation every time the element comes into view
              transition={{
                duration: 0.5, // Duration of the animation
                ease: "easeOut", // Smooth easing effect
              }}
            >
              <ul className="cursor-pointer flex flex-col gap-3">
                <li className="hover:underline">FAQ</li>
                <li className="hover:underline">Contact Us</li>
                <li className="hover:underline">Privacy Policy</li>
                <li className="hover:underline">Terms of Service</li>
              </ul>
            </motion.div>
            <h1 className="text-sm max-w-[400px]">
              This site is powered by Harper + Scott, a Certified B-Corporation.
              For more information read Harper + Scott's CSR policy.
            </h1>
          </div>
        </div>
      </div>

      <div>
        <motion.div
          initial={{ y: 50, opacity: 0 }} // Start position (50px down) and opacity (hidden)
          whileInView={{ y: 0, opacity: 1 }} // End position (original position) and opacity (visible)
          viewport={{ once: false }} // Trigger animation every time the element comes into view
          transition={{
            duration: 1, // Duration of the animation
            ease: "easeOut", // Smooth easing effect
          }}
        >
          <ul className="flex md:flex-row flex-col md:justify-center md:items-center md:gap-6 gap-3 md:text-3xl cursor-pointer mt-3">
            <li className="hover:underline transition-all duration-500">
              FIGMA
            </li>
            <li className="hover:underline">INSTAGRAM</li>
            <li className="hover:underline">TWITTER</li>
            <li className="hover:underline">YOUTUBE</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
