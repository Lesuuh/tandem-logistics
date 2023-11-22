export const DiverseServiceCard = ({ icon, title, text }) => {
  return (
    <div className="rounded-[5px] hover:bg-orange hover:scale-105 duration-500 ease-in-out hover:text-white group  px-[30px] md:px-[50px] text-center border border-solid border-black bg-white shadow flex flex-col gap-5  items-center ">
      <div className="text-2xl text-orange group-hover:text-white mt-[41px] ">{icon}</div>
      <h1 className="text-2xl font-bold ">{title}</h1>
      <p className="mb-[79px]">{text}</p>
    </div>
  );
};
