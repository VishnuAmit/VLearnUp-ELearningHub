// import React from "react";

// const LoginScreen = ({ isVisible, onClose }) => {
//   return (
//     <div
//       className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
//         isVisible ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <button onClick={onClose} className="absolute top-4 left-4 p-2 bg-red-500 text-white rounded">
//         Close
//       </button>
//       <div className="p-8">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginScreen;

import React from 'react';
import styled, { keyframes } from 'styled-components';
 
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
 
const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
`;
 
const FormContainer = styled.div`
  background: white;
  width: 30%;
  padding: 20px;
  animation: ${slideIn} 0.3s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
 
const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
 
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
 
const SubmitButton = styled.button`
  background-color: #000080;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
`;
 
function LoginForm({ closeForm }) {
  return (
<Overlay onClick={closeForm}>
<FormContainer onClick={e => e.stopPropagation()}>
<CloseButton onClick={closeForm}>&times;</CloseButton>
<h2>Login</h2>
<Input type="text" placeholder="Enter your mobile number" />
<SubmitButton>Login</SubmitButton>
<SubmitButton>Email Login</SubmitButton>
</FormContainer>
</Overlay>
  );
}
 
export default LoginForm;