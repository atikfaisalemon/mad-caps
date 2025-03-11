const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?caps,streetwear')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-4xl font-bold">Welcome to Mad Caps</h1>
          <p className="text-lg mt-2 max-w-lg">
            The ultimate destination for premium quality caps with unique
            styles.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8 mt-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          At <strong>Mad Caps</strong>, we design trendy and high-quality caps
          for those who love fashion and individuality. Our collection features
          **streetwear**, **sports caps**, and **custom designs** that bring out
          the best in you.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <img
            src="https://source.unsplash.com/400x400/?cap,fashion"
            alt="Mad Caps 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://source.unsplash.com/400x400/?cap,style"
            alt="Mad Caps 2"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://source.unsplash.com/400x400/?cap,trendy"
            alt="Mad Caps 3"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Mission Section */}
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="mt-2">
            To redefine headwear with stylish, comfortable, and high-quality
            caps that reflect your personality and lifestyle.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">
            Explore Collection
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
