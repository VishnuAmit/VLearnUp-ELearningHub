const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const diff = require('diff');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000

app.use(cors());
app.use(express.json());

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Route to handle PDF comparison
app.post('/compare-pdfs', upload.fields([{ name: 'pdf1' }, { name: 'pdf2' }]), async (req, res) => {
  try {
    const pdf1 = req.files['pdf1'][0];
    const pdf2 = req.files['pdf2'][0];

    // Extract text from PDFs
    const pdf1Text = await pdfParse(pdf1.path);
    const pdf2Text = await pdfParse(pdf2.path);

    // Compare texts
    const diffResult = diff.diffWords(pdf1Text.text, pdf2Text.text);

    // Extract missing parts
    const missingParts = diffResult
      .filter(part => part.removed)
      .map(part => part.value);

    res.json({ missingParts });
  } catch (error) {
    res.status(500).json({ error: 'Error processing PDFs' });
  }
});

// New route to handle PDF upload and quiz generation
app.post('/api/upload-pdf', upload.single('pdf'), async (req, res) => {
  try {
    const pdf = req.file;

    // Extract text from the uploaded PDF
    const pdfText = await pdfParse(pdf.path);

    // Use Gemini API to generate quizzes based on the content
    const response = await fetch('https://api.gemini.com/generate-quizzes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}` // Use API key from .env
      },
      body: JSON.stringify({ content: pdfText.text, quizCount: 10 })
    });

    const quizzes = await response.json();

    res.json(quizzes);
  } catch (error) {
    console.error('Error generating quizzes:', error);
    res.status(500).json({ error: 'Error generating quizzes' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
