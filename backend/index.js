const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const diff = require('diff');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Route to handle PDF uploads and comparison
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
