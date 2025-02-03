import Slider from "./Slider";
import CapList from "./CapList";
import Data from "../Data.json";
const Shop = () => {
  const data = Data;
  return (
    <div className="">
      <Slider />
      <div className="mx-16 p-6">
        <CapList CapList={data} />
      </div>
    </div>
  );
};

export default Shop;
