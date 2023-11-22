import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const Testimonials = () => {
  const TestData = [
    {
      id: 1,
      name: "James Owusu",
      position: "MD GCB Bank",
      img: "/images/Ellipse 6.png",
      text: "“Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat”",
    },
    {
      id: 2,
      name: "Felix Asare",
      position: "Lakeside Estate",
      img: "/images/Ellipse 7.png",
      text: "“Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat”",
    },
    {
      id: 3,
      name: "Charles Addo",
      position: "East Legon",
      img: "/images/Ellipse 8.png",
      text: "“Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat”",
    },
    {
      id: 4,
      name: "James Owusu",
      position: "MD GCB Bank",
      img: "/images/Ellipse 6.png",
      text: "“Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat”",
    },
    {
      id: 5,
      name: "James Owusu",
      position: "MD GCB Bank",
      img: "/images/Ellipse 7.png",
      text: "“Duis at tellus at urna condimentum mattis pellentesque. Quam lacus suspendisse faucibus interdum posuere. Blandit volutpat maecenas volutpat blandit aliquam etiam erat”",
    },
  ];
  return (
    <div className="max-w-[1100px] mx-auto my-10">
      <h1 className="font-bold text-center text-2xl  my-20 lg:my-[149px] md:text-3xl lg:text-4xl">
        Testimonials
      </h1>
      <div  data-aos="fade-up" className="px-5">
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
              },
              1024: {
                perPage: 2,
              },
            },
            gap: "1rem",
            arrows: false,
            pagination: true,
            autoplay: true,
            drag: "free",
            type: "loop",
            interval: 5000
          }}
        >
          {TestData.map((test) => {
            return (
              <SplideSlide key={test.id}>
                <div className=" relative rounded-2xl group hover:bg-orange hover:rounded-3xl hover:text-white hover:scale-105 duration-500 ease-in   border-solid border-black shadow p-5 text-center">
                  <p className="text-[15px]  font-medium">{test.text}</p>
                  <h3 className="pt-2">
                    {test.name} - <span>{test.position}</span>
                  </h3>

                  <img src={test.img} alt={test.name} className="mx-auto mt-5" />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};
