// import { useEffect } from "react";
// import {
//   Routes,
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";
// import ELearning from "./pages/ELearning";

// function App() {
//   const action = useNavigationType();
//   const location = useLocation();
//   const pathname = location.pathname;

//   useEffect(() => {
//     if (action !== "POP") {
//       window.scrollTo(0, 0);
//     }
//   }, [action, pathname]);

//   useEffect(() => {
//     let title = "";
//     let metaDescription = "";

//     switch (pathname) {
//       case "/":
//         title = "";
//         metaDescription = "";
//         break;
//     }

//     if (title) {
//       document.title = title;
//     }

//     if (metaDescription) {
//       const metaDescriptionTag = document.querySelector(
//         'head > meta[name="description"]'
//       );
//       if (metaDescriptionTag) {
//         metaDescriptionTag.content = metaDescription;
//       }
//     }
//   }, [pathname]);

//   return (
//     <Routes>
//       <Route path="/" element={<ELearning />} />
//     </Routes>
//   );
// }
// export default App;

// import { useEffect } from "react";
// import {
//   Routes,
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";
// import ELearning from "./pages/ELearning";

// function App() {
//   const action = useNavigationType();
//   const location = useLocation();
//   const pathname = location.pathname;

//   useEffect(() => {
//     if (action !== "POP") {
//       window.scrollTo(0, 0);
//     }
//   }, [action, pathname]);

//   useEffect(() => {
//     let title = "";
//     let metaDescription = "";

//     switch (pathname) {
//       case "/":
//         title = "VLearnUp - Personalized Learning";
//         metaDescription = "Personalized learning for your unique journey.";
//         break;
//       default:
//         title = "VLearnUp";
//         metaDescription = "Personalized learning platform.";
//     }

//     if (title) {
//       document.title = title;
//     }

//     if (metaDescription) {
//       const metaDescriptionTag = document.querySelector(
//         'head > meta[name="description"]'
//       );
//       if (metaDescriptionTag) {
//         metaDescriptionTag.content = metaDescription;
//       }
//     }
//   }, [pathname]);

//   return (
//     <div className="app-scale">
//       <Routes>
//         <Route path="/" element={<ELearning />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import React,  { useState, useEffect } from "react";
// import {
//   Routes,
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";
// import ELearning from "./pages/ELearning";
// import LoginScreen from "./pages/LoginScreen"; // Import the login component

// function App() {
//   const [isLoginVisible, setLoginVisible] = useState(false);

//   const handleLoginClick = () => {
//     setLoginVisible(true);
//   };

//   const handleCloseClick = () => {
//     setLoginVisible(false);
//   };

//   const action = useNavigationType();
//   const location = useLocation();
//   const pathname = location.pathname;

//   useEffect(() => {
//     if (action !== "POP") {
//       window.scrollTo(0, 0);
//     }
//   }, [action, pathname]);

//   useEffect(() => {
//     let title = "";
//     let metaDescription = "";

//     switch (pathname) {
//       case "/":
//         title = "VLearnUp - Personalized Learning";
//         metaDescription = "Personalized learning for your unique journey.";
//         break;
//       default:
//         title = "VLearnUp";
//         metaDescription = "Personalized learning platform.";
//     }

//     if (title) {
//       document.title = title;
//     }

//     if (metaDescription) {
//       const metaDescriptionTag = document.querySelector(
//         'head > meta[name="description"]'
//       );
//       if (metaDescriptionTag) {
//         metaDescriptionTag.content = metaDescription;
//       }
//     }
//   }, [pathname]);

//   return (
//     <div className="app-scale">
//       <button onClick={handleLoginClick} className="fixed top-4 right-4 p-2 bg-blue-500 text-white rounded">Login</button>
//       <LoginScreen isVisible={isLoginVisible} onClose={handleCloseClick} />
//       <Routes>
//         <Route path="/" element={<ELearning />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
 
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;
 
const LoginButton = styled.button`
  background-color: #000080;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;
 
function App() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
 
  return (
<AppContainer>
<h1>Welcome to the E-Learning Platform</h1>
<LoginButton onClick={() => setLoginFormVisible(true)}>Login</LoginButton>
      {isLoginFormVisible && <LoginForm closeForm={() => setLoginFormVisible(false)} />}
</AppContainer>
  );
}
 
export default App;

