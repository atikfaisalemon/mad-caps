import SizeGuide from "./SizeGuide";
import CartButton from "./CartButton";

const AddToCart = ({ cap }) => {
  return (
    <div>
      <div className="flex flex-col gap-6 mt-10 ">
        {/* <SizeGuide /> */}

        <CartButton cap={cap} />
      </div>
    </div>
  );
};

export default AddToCart;
