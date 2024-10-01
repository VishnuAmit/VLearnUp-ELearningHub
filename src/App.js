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
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { useEffect } from "react";
// import {
//   Routes,
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";
// import ELearning from "./pages/ELearning";
// import Streamfindercomp from "../src/pages/Streamfinder"; // Import the pathfinder page
// import './global.css';
// import Dashboard from "./pages/Dashboard";
// import Upload from "./pages/Upload";
// // import Profesor from "./pages/profesor";
// import '@syncfusion/ej2-react-pdfviewer/styles/material.css';


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
//       case "/streamfinder":
//         title = "VLearnUp - Pathfinder";
//         metaDescription = "Navigate your learning path.";
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
//         <Route path="/streamfinder" element={< Streamfindercomp/>} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/upload" element={<Upload />} />
//         {/* <Route path="/profesor" element={<Profesor />} /> */}
//         {/* <Route path="/mypdfviewer" element={<MyPDFViewer />} /> */}
        
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ELearning from "./pages/ELearning";
import Streamfindercomp from "./pages/Streamfinder"; // Import the pathfinder page
import "./global.css";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/Upload"; // Correct import for the UploadPage
import "@syncfusion/ej2-react-pdfviewer/styles/material.css";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
    case "/":
      title = "VLearnUp - Personalized Learning";
      metaDescription = "Personalized learning for your unique journey.";
      break;
    case "/streamfinder":
      title = "VLearnUp - Pathfinder";
      metaDescription = "Navigate your learning path.";
      break;
    default:
      title = "VLearnUp";
      metaDescription = "Personalized learning platform.";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        "head > meta[name=\"description\"]"
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="app-scale">
      <Routes>
        <Route path="/" element={<ELearning />} />
        <Route path="/streamfinder" element={<Streamfindercomp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
