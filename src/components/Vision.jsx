import { RiMedal2Fill } from "react-icons/ri";
import { GoGoal, GoTrophy } from "react-icons/go";
import visionImg from "../../public/images/chuttersnap-BNBA1h-NgdY-unsplash 1.png";

export const Vision = () => {
  return (
    <div className="max-w-[1100px] mx-auto my-[100px]">
      <div className="px-5 sm:grid grid-cols-2">
        <div>
          <img
            data-aos="fade-right"
            src={visionImg}
            alt="broken_image"
            className=" rounded-xl sm:w-[90%] hover:rounded-full duration-1000 ease"
          />
        </div>
        <div data-aos="fade-left" className="flex flex-col">
          <div className="flex py-5 flex-row items-start gap-5 justify-start">
            <RiMedal2Fill className="text-8xl text-orange -my-[20px]" />
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl lg:text-3xl">Our Vision</h2>
              <p className="text-[15px]  font-medium pt-5">
                Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
                Amet aliquam id diam maecenas ultricies. Eu turpis egestas
                pretium aenean pharetra magna ac placerat.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="flex py-5 flex-row items-start gap-5 justify-start"
          >
            <GoTrophy className="text-8xl text-orange -my-[20px]" />
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl lg:text-3xl">Our Mission</h2>
              <p className="text-[15px]  font-medium pt-5">
                Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
                Amet aliquam id diam maecenas ultricies. Eu turpis egestas
                pretium aenean pharetra magna ac placerat.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex py-5 flex-row items-start gap-5 justify-start"
          >
            <GoGoal className="text-5xl text-orange -my-[20px]" />
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl lg:text-3xl">Our Goals</h2>
              <p className="text-[15px]  font-medium pt-5">
                <ul className="list-disc list-inside">
                  <li>Leo duis ut diam quam nulla porttitor massa id</li>
                  <li>Leo a diam sollicitudin tempor id eu nisl</li>
                  <li>Id consectetur purus ut faucibus pulvinar</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
