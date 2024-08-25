// import { css } from "@emotion/css";
// import PropTypes from "prop-types";

// const Navigation1 = ({ className = "" }) => {
//   return (
//     <div
//       className={[
//         css`
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: flex-start;
//           gap: 130px;
//           text-align: left;
//           font-size: 16px;
//           color: #000;
//           font-family: Poppins;
//         `,
//         className,
//       ].join(" ")}
//     >
//       <div
//         className={css`
//           display: flex;
//           flex-direction: row;
//           align-items: flex-start;
//           justify-content: flex-start;
//           gap: 7px;
//           color: #121212;
//         `}
//       >
//         <img
//           className={css`
//             height: 48px;
//             width: 49px;
//             position: relative;
//             overflow: hidden;
//             flex-shrink: 0;
//             z-index: 1;
//           `}
//           loading="lazy"
//           alt=""
//           src="/logoipsumlogo13-1.svg"
//         />
//         <div
//           className={css`
//             display: flex;
//             flex-direction: column;
//             align-items: flex-start;
//             justify-content: flex-start;
//             padding: 15px 0px 0px;
//           `}
//         >
//           <a
//             className={css`
//               text-decoration: none;
//               position: relative;
//               font-weight: 700;
//               color: inherit;
//               display: inline-block;
//               min-width: 98px;
//               z-index: 1;
//             `}
//           >
//             MATAVERSE
//           </a>
//         </div>
//       </div>
//       <div
//         className={css`
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: flex-start;
//           padding: 0px 20px 0px 0px;
//           gap: 55px;
//         `}
//       >
//         {/* Button Component with Hover Effect */}
//         {[
//           { label: "Overview", icon: "/vuesaxboldelement3.svg" },
//           { label: "Schedule", icon: "/vuesaxlinearcalendaredit.svg" },
//           { label: "Courses", icon: "/vuesaxlinearfolder2.svg" },
//           { label: "Pro Features 1", icon: "/vuesaxlinearchart.svg" },
//           { label: "Pro Features 2", icon: "/vuesaxlinearchart.svg" },
//           { label: "Settings", icon: "/vuesaxlinearsetting2.svg" },
//         ].map((item, index) => (
//           <button
//             key={index}
//             className={css`
//               display: flex;
//               flex-direction: row;
//               align-items: center;
//               justify-content: flex-start;
//               gap: 22px;
//               padding: 10px;
//               background: none;
//               border: none;
//               cursor: pointer;
//               color: #000;
//               font-size: inherit;
//               font-family: inherit;
//               font-weight: 500;
//               transition: background-color 0.3s, color 0.3s;
//               &:hover {
//                 background-color: #f0f0f0; /* Change this color to your desired hover effect */
//                 color: #3c652f; /* Change this color to match your theme */
//               }
//             `}
//           >
//             <img
//               className={css`
//                 height: 24px;
//                 width: 24px;
//                 position: relative;
//                 min-height: 24px;
//                 z-index: 1;
//               `}
//               loading="lazy"
//               alt=""
//               src={item.icon}
//             />
//             <div
//               className={css`
//                 position: relative;
//                 display: inline-block;
//                 min-width: 75px;
//                 z-index: 1;
//               `}
//             >
//               {item.label}
//             </div>
//           </button>
//         ))}
//       </div>
//       <div
//         className={css`
//           display: flex;
//           flex-direction: row;
//           align-items: flex-start;
//           justify-content: flex-start;
//           padding: 0px 20px 0px 0px;
//           gap: 15px;
//         `}
//       >
//         <button
//           className={css`
//             display: flex;
//             flex-direction: row;
//             align-items: center;
//             justify-content: flex-start;
//             gap: 15px;
//             padding: 10px;
//             background: none;
//             border: none;
//             cursor: pointer;
//             color: #000;
//             font-size: inherit;
//             font-family: inherit;
//             font-weight: 500;
//             transition: background-color 0.3s, color 0.3s;
//             &:hover {
//               background-color: #f0f0f0; /* Change this color to your desired hover effect */
//               color: #3c652f; /* Change this color to match your theme */
//             }
//           `}
//         >
//           <img
//             className={css`
//               height: 31px;
//               width: 31px;
//               position: relative;
//               z-index: 1;
//             `}
//             loading="lazy"
//             alt=""
//             src="/vuesaxlinearlogin.svg"
//           />
//           <div
//             className={css`
//               position: relative;
//               display: inline-block;
//               min-width: 59px;
//               z-index: 1;
//             `}
//           >
//             Log out
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// Navigation1.propTypes = {
//   className: PropTypes.string,
// };

// export default Navigation1;

import React from "react";
import { css } from "@emotion/css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Navigation1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className={[
        css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 130px;
          text-align: left;
          font-size: 16px;
          color: #000;
          font-family: Poppins;
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 7px;
          color: #121212;
        `}
      >
        <img
          className={css`
            height: 48px;
            width: 49px;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/logoipsumlogo13-1.svg"
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 15px 0px 0px;
          `}
        >
          <a
            className={css`
              text-decoration: none;
              position: relative;
              font-weight: 700;
              color: inherit;
              display: inline-block;
              min-width: 98px;
              z-index: 1;
            `}
          >
            MATAVERSE
          </a>
        </div>
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 20px 0px 0px;
          gap: 55px;
        `}
      >
        {[
          { label: "Overview", icon: "/vuesaxboldelement3.svg" },
          { label: "Schedule", icon: "/vuesaxlinearcalendaredit.svg" },
          { label: "Courses", icon: "/vuesaxlinearfolder2.svg" },
          { label: "Pro Features 1", icon: "/vuesaxlinearchart.svg", path: "/upload" },
          { label: "Pro Features 2", icon: "/vuesaxlinearchart.svg" },
          { label: "Settings", icon: "/vuesaxlinearsetting2.svg" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => item.path && handleNavigation(item.path)}
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 22px;
              padding: 10px;
              background: none;
              border: none;
              cursor: pointer;
              color: #000;
              font-size: inherit;
              font-family: inherit;
              font-weight: 500;
              transition: background-color 0.3s, color 0.3s;
              &:hover {
                background-color: #f0f0f0;
                color: #3c652f;
              }
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                min-height: 24px;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src={item.icon}
            />
            <div
              className={css`
                position: relative;
                display: inline-block;
                min-width: 75px;
                z-index: 1;
              `}
            >
              {item.label}
            </div>
          </button>
        ))}
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 20px 0px 0px;
          gap: 15px;
        `}
      >
        <button
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 15px;
            padding: 10px;
            background: none;
            border: none;
            cursor: pointer;
            color: #000;
            font-size: inherit;
            font-family: inherit;
            font-weight: 500;
            transition: background-color 0.3s, color 0.3s;
            &:hover {
              background-color: #f0f0f0;
              color: #3c652f;
            }
          `}
        >
          <img
            className={css`
              height: 31px;
              width: 31px;
              position: relative;
              z-index: 1;
            `}
            loading="lazy"
            alt=""
            src="/vuesaxlinearlogin.svg"
          />
          <div
            className={css`
              position: relative;
              display: inline-block;
              min-width: 59px;
              z-index: 1;
            `}
          >
            Log out
          </div>
        </button>
      </div>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;

