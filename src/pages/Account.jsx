import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Account = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  // Reference for Forgot Password section
  const forgotPasswordRef = useRef(null);

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    setTimeout(() => {
      forgotPasswordRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200); // Adding a slight delay for better transition effect
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-[500px] text-center">
        <h1 className="text-5xl font-bold mt-24 mb-24">WELCOME BACK</h1>

        {/* Email Input */}
        <div className="text-left">
          <label className="font-semibold">Your email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border-b p-2 outline-none mb-4"
          />
        </div>

        {/* Password Input */}
        <div className="mt-4 text-left">
          <label className="font-semibold">Your Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border-b p-2 outline-none mb-4"
          />
        </div>

        {/* Forgot Password Button */}
        <div className="text-right mt-6 mb-6">
          <button
            onClick={handleForgotPassword}
            className="text-sm font-semibold"
          >
            Forgot password?
          </button>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-black text-white py-3 mt-4 rounded-full font-semibold border border-black hover:text-black hover:bg-white">
          SIGN IN
        </button>

        {/* Forgot Password Section */}
        {showForgotPassword && (
          <motion.div
            ref={forgotPasswordRef}
            className="mt-24 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
          >
            <h2 className="text-2xl font-bold mb-4">RECOVER YOUR PASSWORD</h2>
            <label className="block mt-4 font-semibold text-left">
              Your email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border-b p-2 outline-none mb-4"
            />
            <button className="w-full bg-black text-white py-3 mt-4 rounded-full font-semibold border border-black hover:text-black hover:bg-white">
              SEND RECOVERY EMAIL
            </button>
          </motion.div>
        )}

        {/* Create Account Section */}
        <div className="text-center mt-8 mb-20">
          <p>New to The Store?</p>
          <button
            onClick={() => navigate("/create-account")}
            className="mt-2 border px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
