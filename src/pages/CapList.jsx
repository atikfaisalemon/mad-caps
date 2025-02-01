function CapList({ CapList }) {
  console.log("data", CapList);
  return (
    <div>
      <div>
        <h2>Available Caps</h2>
        <div className="grid grid-cols-3 gap-4">
          {CapList.map((cap) => (
            <div key={cap.id} className="border p-4 rounded">
              <img
                src={cap.image}
                alt={cap.name}
                className="w-full h-32 object-cover mb-2"
              />
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
