import { useNavigate } from "react-router";

import SigleCapDtails from "./SigleCapDtails";

function CapList({ CapList }) {
  console.log("data", CapList);
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-24">
        <div className="grid grid-cols-4 gap-3">
          {CapList.map((cap) => (
            <div
              key={cap.id}
              onClick={() => {
                navigate(`/${cap.id}`);
              }}
              className="p-4 rounded h-[600px]"
            >
              <SigleCapDtails cap={cap} />
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl font-semibold">{cap.name}</h3>

                <p className="text-xl font-[3px]">{cap.price}TK</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CapList;
