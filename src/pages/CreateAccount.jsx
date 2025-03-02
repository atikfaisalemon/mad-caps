const CreateAccount = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-5xl text-center font-bold mt-24 mb-24">
        CREATE AN ACCOUNT
      </h2>
      <div className="w-full max-w-[500px] text-center">
        <div className="flex flex-col md:gap-10 gap-6">
          <div>
            <label className="block mt-4 font-semibold text-left">
              First name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border-b p-2 outline-none mb-4"
            />
          </div>
          <div>
            <label className="block font-semibold text-left">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border-b p-2 outline-none mb-4"
            />
          </div>
          <label className="block font-semibold text-left">Email</label>
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border-b p-2 outline-none mb-4"
            />
          </div>
          <div>
            <label className="block font-semibold text-left">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-b p-2 outline-none mb-4"
            />
          </div>
        </div>
        <button className="w-full bg-black text-white py-3 mt-6 mb-24 rounded-full font-semibold border border-black hover:text-black hover:bg-white">
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
