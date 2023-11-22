import headerImg from "/images/blog-page-img-3 1.png";
export const Header = ({ text }) => {
  return (
    <div>
      <div  className="text-center relative">
        <img data-aos="fade-right" src={headerImg} alt="header-img" className="" />
        <div  className="absolute bg-black opacity-80 inset-0"></div>
        <h1  data-aos="fade-up" data-aos-duration="3000" className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-bold text-white">
          {text}
        </h1>
      </div>
    </div>
  );
};
