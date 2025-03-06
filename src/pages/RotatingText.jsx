import { useEffect, useRef } from "react";

const RotatingText = ({ text = "100% OF PROFITS FUND REFORESTATION 🌱" }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circleText = circleRef.current;
    if (circleText) {
      const chars = text.split("");
      circleText.innerHTML = chars
        .map(
          (char, i) =>
            `<span style="position: absolute; transform: rotate(${
              i * (360 / chars.length)
            }deg) translate(45px)">${char}</span>`
        )
        .join("");
    }
  }, [text]);

  return (
    <div className="fixed left-10 bottom-[50%] flex items-center justify-center w-[120px] h-[120px]">
      {/* Circle Border */}
      <div className="relative w-[120px] h-[120px] border-2 border-black rounded-full flex items-center justify-center">
        {/* Rotating Text */}
        <div
          ref={circleRef}
          className="absolute w-full h-full text-[10px] uppercase font-bold text-black"
          style={{ animation: "spin 10s linear infinite" }} // Only the text rotates
        ></div>

        {/* Stable Center Emoji */}
        <div className="absolute text-3xl">✋</div>
      </div>
    </div>
  );
};

export default RotatingText;
