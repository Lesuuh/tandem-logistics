import headerImg from "/images/blog-page-img-3 1.png";
export const Header = ({ text }) => {
  return (
    <div>
      <div className="text-center relative">
        <img src={headerImg} alt="header-img" className="" />
        <div className="absolute bg-black opacity-50 inset-0"></div>
        <h1 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-bold text-white">
          {text}
        </h1>
      </div>
    </div>
  );
};
