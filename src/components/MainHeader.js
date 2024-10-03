// import PropTypes from "prop-types";

// const MainHeader = ({ className = "" }) => {
//   return (
//     <header
//       className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[73px] pr-[70px] pl-5 box-border max-w-full text-left text-13xl text-white font-poppins mq1225:pr-[35px] mq1225:box-border ${className}`}
//     >
//       <div className="w-[1654px] flex flex-row items-start justify-between gap-[20px] max-w-full">
//         <div className="flex flex-col items-start justify-start pt-[14.8px] px-0 pb-0">
//           <a className="[text-decoration:none] relative tracking-[0.04em] font-bold text-[inherit] whitespace-nowrap z-[2]">
//             VLearnUp
//           </a>
//         </div>
//         <div className="w-[1148px] flex flex-row items-end justify-start gap-[78px] max-w-full text-3xl mq850:gap-[19px] mq1225:gap-[39px]">
//           <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full">
//             <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1500:hidden">
//               <a className="[text-decoration:none] relative tracking-[0.02em] font-bold text-[inherit] inline-block min-w-[69px] z-[1]">
//                 Home
//               </a>
//               <div className="flex flex-col items-start justify-start py-0 pr-[23px] pl-0">
//                 <div className="flex flex-row items-start justify-start relative">
//                   <a className="[text-decoration:none] relative tracking-[0.02em] font-bold text-[inherit] inline-block min-w-[97px] whitespace-nowrap z-[1]">{`Courses `}</a>
//                   <img
//                     className="h-6 w-6 absolute !m-[0] right-[-21px] bottom-[4.2px] overflow-hidden shrink-0 z-[2]"
//                     alt=""
//                     src="/chevronbottomnormal.svg"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
//                 <a className="[text-decoration:none] relative tracking-[0.02em] font-bold text-[inherit] inline-block min-w-[83px] z-[1]">
//                   Pricing
//                 </a>
//               </div>
//               <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
//                 <a className="[text-decoration:none] relative tracking-[0.02em] font-bold text-[inherit] inline-block min-w-[87px] z-[1]">
//                   Explore
//                 </a>
//               </div>
//               <a className="[text-decoration:none] relative tracking-[0.02em] font-bold text-[inherit] inline-block min-w-[105px] whitespace-nowrap z-[1]">
//                 About Us
//               </a>
//             </div>
//           </div>
//           <div className="flex flex-row items-start justify-start gap-[26px] max-w-full">
//             <button className="cursor-pointer [border:none] pt-[13px] pb-3.5 pr-[47px] pl-[50px] bg-[transparent] shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-mini [background:conic-gradient(from_90deg_at_50%_50%,_#fff_0deg,_#fff_360deg)] flex flex-row items-start justify-start z-[4]">
//               <div className="h-[60px] w-40 relative shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-mini [background:conic-gradient(from_90deg_at_50%_50%,_#fff_0deg,_#fff_360deg)] hidden" />
//               <a className="[text-decoration:none] relative text-3xl tracking-[0.02em] font-bold font-poppins text-dimgray text-left inline-block min-w-[63px] z-[1]">
//                 Login
//               </a>
//             </button>
//             <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
//               <button className="cursor-pointer [border:none] pt-3 pb-[15px] pr-[33px] pl-[39px] bg-gray-200 shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-mini flex flex-row items-start justify-start whitespace-nowrap z-[4] hover:bg-gainsboro-300">
//                 <div className="h-[60px] w-40 relative shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-mini bg-gray-200 hidden" />
//                 <a className="[text-decoration:none] relative text-3xl tracking-[0.02em] font-bold font-poppins text-white text-left inline-block min-w-[88px] z-[1]">
//                   Sign Up
//                 </a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// MainHeader.propTypes = {
//   className: PropTypes.string,
// };

// export default MainHeader;

import React, { useState } from "react";
import Modal from "react-modal";
import LoginScreen from "../pages/LoginScreen"; // Adjust the path as necessary
import SignUpScreen from "../pages/SignUpScreen"; // Adjust the path as necessary

Modal.setAppElement("#root"); // Set your app element for accessibility


const MainHeader = ({coursesRef,articleRef,featuresRef,exploreRef,aboutRef,className = "" }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    // setShowSignUp(true);

  };
  const handleScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);

  };

  return (
    <>
      <header
        className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[73px] pr-[70px] pl-5 box-border max-w-full text-left text-13xl text-white font-poppins mq1225:pr-[35px] mq1225:box-border ${className}`}
      >
        <div className="w-[1654px] flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-[14.8px] px-0 pb-0">
            <a className="[text-decoration:none] relative tracking-[0.04em] font-bold text-[inherit] whitespace-nowrap z-[2]">
              VLearnUp
            </a>
          </div>
          <div className="w-[1148px] flex flex-row items-end justify-start gap-[78px] max-w-full text-3xl mq850:gap-[19px] mq1225:gap-[39px]">
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full">

              <div className="self-stretch flex flex-row items-start justify-evenly gap-[20px] mq1400:hidden">
                
                <button
                  className="bg-transparent cursor-pointer [text-decoration:none] relative tracking-[0.02em] font-bold text-white text-lg inline-block min-w-[83px] z-[1] hover:text-[#F48C06]"
                  onClick={() => handleScrollToSection(coursesRef)}
                >
                Courses
                </button>

                <button
                  className=" bg-transparent cursor-pointer [text-decoration:none] relative tracking-[0.02em] font-bold text-white text-lg inline-block min-w-[83px] z-[1] hover:text-[#F48C06]"
                  onClick={() => handleScrollToSection(articleRef)}
                >
                  Article
                  
                </button>

                <button
                  className=" bg-transparent cursor-pointer [text-decoration:none] relative tracking-[0.02em] font-bold text-white text-lg inline-block min-w-[83px] z-[1] hover:text-[#F48C06]"
                  onClick={() => handleScrollToSection(exploreRef)}
                >
                  Explore
                  
                </button>

                <button
                  className=" bg-transparent cursor-pointer [text-decoration:none] relative tracking-[0.02em] font-bold text-white text-lg inline-block min-w-[83px] z-[1] hover:text-[#F48C06]"
                  onClick={() => handleScrollToSection(aboutRef)}
                >
                 About Us
                  
                </button>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[26px] max-w-full">
              <button
                className="cursor-pointer [border:none] pt-[13px] pb-3.5 pr-[47px] pl-[50px] bg-[transparent] shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-mini [background:conic-gradient(from_90deg_at_50%_50%,_#fff_0deg,_#fff_360deg)] flex flex-row items-start justify-start z-[4]"
                onClick={handleLoginClick}
              >
                <div className="h-[60px] w-40 relative shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-mini [background:conic-gradient(from_90deg_at_50%_50%,_#fff_0deg,_#fff_360deg)] hidden" />
                <a className="[text-decoration:none] relative text-3xl tracking-[0.02em] font-bold font-poppins text-dimgray text-left inline-block min-w-[63px] z-[1]">
                  Login
                </a>
              </button>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <button className="cursor-pointer [border:none] pt-3 pb-[15px] pr-[33px] pl-[39px] bg-gray-200 shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-mini flex flex-row items-start justify-start whitespace-nowrap z-[4] hover:bg-gainsboro-300" onClick={handleSignUpClick}>
                  <div className="h-[60px] w-40 relative shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-mini bg-gray-200 hidden" />
                  <a className="[text-decoration:none] relative text-3xl tracking-[0.02em] font-bold font-poppins text-white text-left inline-block min-w-[88px] z-[1]">
                    Sign Up
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal
        isOpen={showLogin}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <LoginScreen />
      </Modal>

      <Modal
        isOpen={showSignUp}
        onRequestClose={closeModal}
        contentLabel="SignUp Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <SignUpScreen />
      </Modal>
    </>
  );
};

export default MainHeader;
