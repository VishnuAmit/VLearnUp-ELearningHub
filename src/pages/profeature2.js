// import React, { useState } from 'react';

// const ProFeature2 = () => {
//   const [pdfFile, setPdfFile] = useState(null);
//   const [quizContent, setQuizContent] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Handle PDF file upload
//   const handlePdfUpload = (event) => {
//     setPdfFile(event.target.files[0]);
//   };

//   // Function to send the PDF to the backend and get the generated quiz
//   const generateQuiz = async () => {
//     if (!pdfFile) {
//       alert('Please upload a PDF file first.');
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('pdf', pdfFile);

//     try {
//       const response = await fetch('http://localhost:5000/generate-quiz', {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (result.error) {
//         console.error('Error generating quiz:', result.error);
//       } else {
//         setQuizContent(result.quiz_content);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Pro Feature 2 - Generate Quiz</h1>

//       {/* PDF Upload */}
//       <input type="file" accept="application/pdf" onChange={handlePdfUpload} />

//       {/* Button to Generate Quiz */}
//       <button style={styles.button} onClick={generateQuiz} disabled={loading}>
//         {loading ? 'Generating...' : 'Generate Quiz'}
//       </button>

//       {/* Render Quiz Content */}
//       {quizContent && (
//         <div dangerouslySetInnerHTML={{ __html: quizContent }}></div>
//       )}
//     </div>
//   );
// };

// // Inline styling
// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//     textAlign: 'center',
//   },
//   button: {
//     padding: '10px 20px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginTop: '20px',
//   },
// };

// export default ProFeature2;


// import React, { useState } from 'react';
// import axios from 'axios';

// function ProFeature2() {
//   const [quizContent, setQuizContent] = useState("");
//   const [error, setError] = useState(null);

//   const handleFileUpload = async (event) => {
//     const formData = new FormData();
//     formData.append('pdf', event.target.files[0]);

//     try {
//       const response = await axios.post('http://localhost:5000/generate-quiz', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.quiz_content) {
//         setQuizContent(response.data.quiz_content);
//         setError(null);
//       } else {
//         setError("No quiz content received.");
//       }
//     } catch (err) {
//       setError("Error generating quiz: " + err.message);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} />
//       {error && <p>{error}</p>}
//       <div dangerouslySetInnerHTML={{ __html: quizContent }} />
//     </div>
//   );
// }

// export default ProFeature2;

// import React, { useState } from 'react';
// import axios from 'axios';

// function ProFeature2() {
//   const [quizContent, setQuizContent] = useState("");
//   const [error, setError] = useState(null);

//   const handleFileUpload = async (event) => {
//     const formData = new FormData();
//     formData.append('pdf', event.target.files[0]);

//     try {
//       const response = await axios.post('http://localhost:5000/generate-quiz', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.quiz_content) {
//         setQuizContent(response.data.quiz_content);
//         setError(null);
//       } else {
//         setError("No quiz content received.");
//       }
//     } catch (err) {
//       setError("Error generating quiz: " + err.message);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} />
//       {error && <p>{error}</p>}
//       <div dangerouslySetInnerHTML={{ __html: quizContent }} />
//     </div>
//   );
// }

// export default ProFeature2;

// import React, { useState } from 'react';
// import axios from 'axios';

// function ProFeature2() {
//   const [quiz, setQuiz] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [showExplanation, setShowExplanation] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(null);

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('pdf', file);

//     try {
//       const response = await axios.post('http://localhost:5000/generate-quiz', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setQuiz(response.data.quiz);
//       setCurrentQuestion(0); // Reset to the first question
//     } catch (err) {
//       console.error("Error generating quiz:", err);
//     }
//   };

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const handleSubmit = () => {
//     if (quiz[currentQuestion].correct_answer === selectedOption) {
//       setIsCorrect(true);
//     } else {
//       setIsCorrect(false);
//     }
//     setShowExplanation(true);
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestion((prev) => Math.min(prev + 1, quiz.length - 1));
//     setShowExplanation(false);
//     setSelectedOption("");
//   };

//   const handlePreviousQuestion = () => {
//     setCurrentQuestion((prev) => Math.max(prev - 1, 0));
//     setShowExplanation(false);
//     setSelectedOption("");
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} />
      
//       {quiz.length > 0 && (
//         <div>
//           <h2>{quiz[currentQuestion].question}</h2>
          
//           {quiz[currentQuestion].options.map((option, index) => (
//             <div key={index}>
//               <label>
//                 <input
//                   type="radio"
//                   value={option}
//                   checked={selectedOption === option}
//                   onChange={() => handleOptionChange(option)}
//                 />
//                 {option}
//               </label>
//             </div>
//           ))}

//           <button onClick={handleSubmit}>Submit</button>

//           {showExplanation && (
//             <div>
//               {isCorrect ? (
//                 <p style={{ color: 'green' }}>Correct!</p>
//               ) : (
//                 <p style={{ color: 'red' }}>Incorrect. {quiz[currentQuestion].explanation}</p>
//               )}
//             </div>
//           )}

//           <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>Previous</button>
//           <button onClick={handleNextQuestion} disabled={currentQuestion === quiz.length - 1}>Next</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProFeature2;
import React, { useState } from 'react';
import axios from 'axios';

function ProFeature2() {
  const [quizContent, setQuizContent] = useState("");
  const [error, setError] = useState(null);

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append('pdf', event.target.files[0]);

    try {
      const response = await axios.post('http://localhost:5000/generate-quiz', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.quiz_content) {
        setQuizContent(response.data.quiz_content);
        setError(null);
      } else {
        setError("No quiz content received.");
      }
    } catch (err) {
      setError("Error generating quiz: " + err.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {error && <p>{error}</p>}
      <div dangerouslySetInnerHTML={{ __html: quizContent }} />
    </div>
  );
}

export default ProFeature2;
