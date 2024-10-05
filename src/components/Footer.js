import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`bg-darkslategray w-full flex flex-col items-center justify-start pt-16 pb-10 px-10 box-border gap-14 text-center text-white font-poppins ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-between gap-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="relative flex items-center">
            <img
              className="h-20 w-20 "
              alt="VLearnUp Logo"
              src="/group-453.svg"
            />
            <h3 className="absolute left-7 text-5xl font-bold tracking-wider text-white z-10">
              VLearnUp
            </h3>
          </div>
          <div className="text-2xl font-semibold tracking-wider">
            All-in-One E-Learning Platform
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-6">
          <b className="text-3xl tracking-wider">
            Subscribe to get our Newsletter
          </b>
          {/* <div className="flex w-full max-w-lg gap-6 ">
            <input
              className="w-full px-4 py-7  bg-[transparent] border border-white  rounded-full text-xl font-poppins focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ease-in-out shadow-lg  font-bold text-white text-center p-0 z-[2]"
              placeholder="Your Email"
              type="text"
            />
            <button className="h-12 px-6  bg-dimgray text-white rounded-full text-3xl hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out shadow-lg">
              <b>Subscribe</b>
            </button>
          </div> */}
          <div className="flex w-full max-w-lg gap-6 items-center">
            <input
              className="w-full px-4 py-6 bg-transparent border border-white rounded-full text-xl font-poppins focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ease-in-out shadow-lg font-bold text-white text-center p-0 z-[2]"
              placeholder="Your Email"
              type="text"
            />
            <button className="h-12 px-6 bg-dimgray text-white rounded-full text-3xl hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out shadow-lg">
              <b>Subscribe</b>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-6 text-lg text-gray-300">
          <div className="flex items-center gap-6">
            <b className="cursor-pointer">Careers</b>
            <span className="border-r border-gray-400 h-6" />
            <b className="cursor-pointer">Privacy Policy</b>
            <span className="border-r border-gray-400 h-6" />
            <b className="cursor-pointer">Terms & Conditions</b>
          </div>
          <b className="text-base">© 2024 E-Class Learning Inc.</b>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
