import React, { useState } from 'react';
import {
  Button,
  TextField,
  Paper,
  Typography,
  IconButton,
  Box,
  Slide,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!userMessage) return;

    // Add user message to chat history
    setChatHistory((prev) => [...prev, { role: 'user', text: userMessage }]);

    // Call the API to get a response from the chatbot
    const response = await fetch('http://localhost:5001/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    // Add the chatbot response to chat history
    if (data.response) {
      setChatHistory((prev) => [...prev, { role: 'chatbot', text: data.response }]);
    }

    // Clear the input field
    setUserMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the default action of the Enter key
      handleSendMessage(); // Call the send message function
      setUserMessage('');
    }
  };

  return (
    <>
      <IconButton
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <ChatIcon color="primary" />
      </IconButton>

      <Slide direction="up" in={isChatOpen} mountOnEnter unmountOnExit>
        <Paper
          elevation={4}
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '400px',
            height: '500px', // Set a fixed height for the chat box
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            borderRadius: '10px',
            zIndex: 999,
          }}
        >
          <Box
            style={{
              flex: 1,
              overflowY: 'auto',
              marginBottom: '16px',
              padding: '8px',
            }}
          >
            {chatHistory.length === 0 ? (
              <Typography style={{ textAlign: 'center', color: 'grey' }}>
                Start the conversation! 💬
              </Typography>
            ) : (
              chatHistory.map((msg, index) => (
                <Typography
                  key={index}
                  style={{
                    marginBottom: '10px',
                    color: msg.role === 'user' ? 'blue' : 'green',
                    textAlign: msg.role === 'user' ? 'right' : 'left',
                  }}
                >
                  <strong>{msg.role === 'user' ? 'You: ' : ''}</strong>
                  {msg.text}
                </Typography>
              ))
            )}
          </Box>

          <TextField
            variant="outlined"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            fullWidth
            style={{ marginBottom: '8px' }}
            InputProps={{
              style: { borderRadius: '20px' },
            }}
          />

          <Button
            onClick={handleSendMessage}
            variant="contained"
            color="primary"
            fullWidth
            style={{ borderRadius: '20px' }}
          >
            Send
          </Button>
        </Paper>
      </Slide>
    </>
  );
};

export default Chatbot;
