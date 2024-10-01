// import React, { useState } from 'react';
// import axios from 'axios';

// function ProFeature3() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState("");

//   const handleSend = async () => {
//     if (userInput.trim()) {
//       // Add user message to chat
//       const updatedMessages = [...messages, { role: 'user', content: userInput }];
//       setMessages(updatedMessages);
      
//       // Send user message to backend
//       try {
//         const response = await axios.post('http://localhost:5001/chat', { message: userInput });
//         const { response: botResponse, messages: updatedChatHistory } = response.data;

//         // Add chatbot response to chat
//         setMessages(updatedChatHistory);
//         setUserInput(""); // Clear input field
//       } catch (error) {
//         console.error("Error sending message:", error);
//       }
//     }
//   };

//   return (
//     <div style={{ position: 'fixed', bottom: '0', right: '0', width: '300px', height: '400px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
//       <div style={{ height: '90%', overflowY: 'scroll', padding: '10px' }}>
//         {messages.map((message, index) => (
//           <div key={index} style={{ marginBottom: '10px' }}>
//             <strong>{message.role === 'user' ? 'You' : 'Chatbot'}:</strong>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//       <div style={{ borderTop: '1px solid #ddd', padding: '10px' }}>
//         <input
//           type="text"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           style={{ width: 'calc(100% - 70px)', padding: '5px' }}
//         />
//         <button onClick={handleSend} style={{ width: '60px', height: '30px' }}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default ProFeature3;

import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = async () => {
    if (userInput.trim()) {
      // Add user message to chat
      const updatedMessages = [...messages, { role: 'user', content: userInput }];
      setMessages(updatedMessages);

      // Send user message to backend
      try {
        const response = await axios.post('http://localhost:5001/chat', { message: userInput });
        const { response: botResponse, messages: updatedChatHistory } = response.data;

        // Add chatbot response to chat
        setMessages(updatedChatHistory);
        setUserInput(""); // Clear input field
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '0', right: '0', width: '300px', height: '400px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
      <div style={{ height: '90%', overflowY: 'scroll', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{message.role === 'user' ? 'You' : 'Chatbot'}:</strong>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #ddd', padding: '10px' }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ width: 'calc(100% - 70px)', padding: '5px' }}
        />
        <button onClick={handleSend} style={{ width: '60px', height: '30px' }}>Send</button>
      </div>
    </div>
  );
}

export default Dashboard;

