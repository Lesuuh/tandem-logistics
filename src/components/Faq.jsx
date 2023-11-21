import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

export const Faq = () => {
  const faq = [
    {
      id: 1,
      title: "Where are you located?",
      question:
        "Our main headquarters is strategically located at [City, Country], serving as the hub for our global logistics operations. Additionally, we have regional offices and distribution centers across key locations to ensure seamless coordination and efficient service delivery. You can find the address and contact details of our various locations on the Contact Us page of our website.",
    },
    {
      id: 2,
      title: "Where are you located?",
      question:
        " Our main headquarters is strategically located at [City, Country], serving as the hub for our global logistics operations. Additionally, we have regional offices and distribution centers across key locations to ensure seamless coordination and efficient service delivery. You can find the address and contact details of our various locations on the Contact Us page of our website.",
    },
    {
      id: 3,
      title: "Where are you located?",
      question:
        " lorem18 hhu sdjhs jdshkhd hjbjs uhjhnj jjjjkaj hsdkjjkkj jhgsjhdjn hgjshjh  ",
    },
    {
      id: 4,
      title: "Where are you located?",
      question:
        " lorem18 hhu sdjhs jdshkhd hjbjs uhjhnj jjjjkaj hsdkjjkkj jhgsjhdjn hgjshjh  ",
    },
    {
      id: 5,
      title: "Where are you located?",
      question:
        " lorem18 hhu sdjhs jdshkhd hjbjs uhjhnj jjjjkaj hsdkjjkkj jhgsjhdjn hgjshjh  ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(false);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? !prevIndex : index));
  };

  return (
    <div className="max-w-[1100px] w-full px-5 mx-auto my-10">
      <h1 className="font-bold text-center text-2xl my-20 lg:my-[149px] md:text-3xl lg:text-4xl">
        FAQs
      </h1>
      <div className="px-2 flex flex-col flex-wrap gap-5 md:flex-row">
        {faq.map((question, index) => {
          return (
            <div key={question.id} className="flex flex-col">
              <div
                className="flex shadow h-[60px] w-full justify-between items-center px-2 gap-2 my-2 cursor-pointer
                 "
                onClick={() => toggleFaq(index)}
              >
                <p>{question.title}</p>
                {activeIndex === index ? <LuMinus /> : <LuPlus />}
              </div>
              {activeIndex === index && (
                <p className="lg:w-[500px]">{question.question}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
