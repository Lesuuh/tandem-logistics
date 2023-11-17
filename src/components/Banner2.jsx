import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

export const Banner2 = () => {
  return (
    <div className="bg-gray mx-auto my-10 px-5 w-full h-auto py-5 text-center font-bold max-w-[1100px]">
        <h2>Our Customer service is available 24/7</h2>
        <h1 className="flex flex-row justify-center items-center text-2xl"><BsWhatsapp className="text-greenish"/> <FaPhone/>+1-255-789489</h1>
    </div>
  )
}
