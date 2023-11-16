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
    <div className="w-full max-w-[1100px] h-auto bg-white py-5 mx-auto">
      <Splide
        id="splide"
        options={{
            perPage : 3,
          type: "loop",
          gap: "1rem",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
        //   height: "15rem",
          speed: 800,
          inteval: 100,
          pagination: false,
          arrows: false,
        }}
      >
        {bannerData.map((banner) => {
          return (
            <SplideSlide key={banner.id}>
              <div>
                <img src={banner.img} alt="" className="w-[100px] " />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
