import { useNavigate } from "react-router";

import SigleCapDtails from "./SigleCapDtails";

function CapList({ CapList }) {
  console.log("data", CapList);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="grid grid-cols-3  gap-4">
          {CapList.map((cap) => (
            <div
              key={cap.id}
              onClick={() => {
                navigate(`/${cap.id}`);
              }}
              className="border p-4 rounded h-[600px]"
            >
              <SigleCapDtails cap={cap} />
              <h3 className="text-lg font-semibold">{cap.name}</h3>
              <p className="text-sm">{cap.description}</p>
              <p className="font-bold text-blue-600">${cap.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CapList;
