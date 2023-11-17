import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect } from "react";

export const Banner = () => {
  const bannerData = [
    { id: 1, img: "/images/Logo.png" },
    {
      id: 2,
      img: "/images/Logo-1.png",
    },
    {
      id: 3,
      img: "/images/Logo-2.png",
    },
    {
      id: 4,
      img: "/images/Logo-3.png",
    },
    {
      id: 5,
      img: "/images/Logo-4.png",
    },
    {
      id: 6,
      img: "/images/Logo-5.png",
    },
  ];
  //   const options = {};

  return (
    <div className="w-full max-w-[1100px] h-auto px-5 bg-white py-5  flex items-center justify-center mx-auto ">
      <Splide
        id="splide"
        options={{
          perPage: 5,
          breakpoints: {
            640 : {
              perPage: 3
            }
          },
          gap: "1rem", 
          type: "loop",
          autoplay: true,
          pauseOnHover: true,
          resetProgress: false,
          speed: 100000,
          interval: 1000, 
          pagination: false,
          arrows: false,
        }}
      >
        {bannerData.map((banner) => (
          <SplideSlide key={banner.id}>
            <div>
              <img src={banner.img} alt="" className="w-[100px]" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
