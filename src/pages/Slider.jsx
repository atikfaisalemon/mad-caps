// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BASE_API_URL
          }/api/categories/t2b4zy3f47x2ueykfhakpajp?populate[products][populate]=images`
        );
        const { data } = await response.json();

        setData([...data.products, ...data.products]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (!data) {
    return null;
  }
  console.log("data carusol", data);
  return (
    <>
      <div className="pt-16 ">
        {loading ? (
          <div className="h-[600px] object-cover bg-gray-300 animate-pulse"></div>
        ) : (
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            loop={true}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            scrollbar={true}
            navigation={false}
            pagination={true}
            modules={[Keyboard, Navigation, Pagination]}
          >
            {data.map((product) => (
              <SwiperSlide key={product.documentId}>
                <img
                  onClick={() => {
                    navigate(`/${product.documentId}`);
                  }}
                  src={product.images[0]?.formats.large.url ?? ""}
                  className="h-[600px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Slider;
