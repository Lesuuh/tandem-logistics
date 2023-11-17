import choseusImage from "/images/african-american-female-courier-unloading-packages-from-delivery-truck 1.png";
import { FaBolt, FaShieldAlt } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

export const WhyChoseUs = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <h1 className="font-bold text-center text-2xl  my-20 lg:my-[149px] md:text-3xl lg:text-4xl">
        Why Chose Us
      </h1>
      <div className="px-5 sm:grid grid-cols-2">
        <div>
          <img src={choseusImage} alt="broken_image" className=" rounded-xl sm:w-[90%]" />
        </div>
        <div className="flex flex-col">
          <div className="flex py-5 flex-row items-start gap-5 justify-start">
            <FaBolt className="text-8xl text-orange -my-[20px]" />
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl lg:text-3xl">Right on time</h2>
              <p className="text-[15px]  font-medium pt-5">
                Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
                Amet aliquam id diam maecenas ultricies. Eu turpis egestas
                pretium aenean pharetra magna ac placerat.
              </p>
            </div>
          </div>

          <div className="flex py-5 flex-row items-start gap-5 justify-start">
            <BsCashCoin className="text-8xl text-orange -my-[20px]" />
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl lg:text-3xl">Cost Saving</h2>
              <p className="text-[15px]  font-medium pt-5">
                Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
                Amet aliquam id diam maecenas ultricies. Eu turpis egestas
                pretium aenean pharetra magna ac placerat.
              </p>
            </div>
          </div>
          <div className="flex py-5 flex-row items-start gap-5 justify-start">
            <FaShieldAlt className="text-8xl text-orange -my-[20px]" />
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl lg:text-3xl">Save and Secure</h2>
              <p className="text-[15px]  font-medium pt-5">
                Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
                Amet aliquam id diam maecenas ultricies. Eu turpis egestas
                pretium aenean pharetra magna ac placerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
