import { Background } from "./Background";
import img from "/images/gabriel-santos-GBVDilE8yvI-unsplash 1.png";

export const AboutWelcome = () => {
  return (
    <div className="max-w-[1100px] w-full px-5 mx-auto mt-[205px]">
        <Background />
      <div className="flex flex-col md:flex-row gap-[100px]">
        <div className="flex-col md:w-[500px]">
          <h1 className="font-bold text-2xl">Welcome To Tandem</h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum
            aliquam debitis nisi dicta nemo reprehenderit omnis eveniet totam
            et, exercitationem unde error eum pariatur eos doloremque quidem
            mollitia vero minus eius esse vitae. Nemo corporis necessitatibus
            molestiae in consectetur similique, porro sint, eaque quas culpa
            assumenda iste eligendi quidem vitae! Esse quod voluptatem
            assumenda, iure soluta eveniet dignissimos omnis nam quidem
            voluptatibus. Et dolorem voluptatem aspernatur possimus velit in
            enim nam perspiciatis, amet vel facere qui quae architecto illo,
            odio numquam maiores incidunt adipisci, eos animi repellendus saepe
            doloribus sit? Nam nihil fugiat eius culpa rem illo amet deserunt?
          </p>
        </div>
        <div>
          <img src={img} alt="broken-img" />
        </div>
      </div>
      
    </div>
  );
};
