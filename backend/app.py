# from flask import Flask, request, jsonify
# from google.generativeai.types import HarmCategory, HarmBlockThreshold
# import google.generativeai as genai
# from langchain_community.document_loaders import PyPDFLoader
# import os

# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)


# # Configure the Google Generative AI API
# genai.configure(api_key="AIzaSyDfWCutYJcWGNZTuMdwlmZhA0iriqwsDJk")

# # Function to extract text from a PDF
# def extract_text_from_pdf(pdf_path):
#     loader = PyPDFLoader(pdf_path)
#     pages = loader.load()
#     combined_text = ""
#     for page in pages:
#         combined_text += page.page_content + "\n"
#     return combined_text

# # API endpoint to handle PDF and generate the quiz
# @app.route('/generate-quiz', methods=['POST'])
# def generate_quiz():
#     try:
#         # Get the uploaded PDF file from the request
#         pdf_file = request.files['pdf']

#         # Save the PDF to a temporary location
#         pdf_path = os.path.join("/tmp", pdf_file.filename)
#         pdf_file.save(pdf_path)

#         # Extract text from the PDF
#         pdf_text = extract_text_from_pdf(pdf_path)

#         # Generate the prompt for the Google Generative AI API
#         prompt = f"""
#         You are a web developer tasked with generating a dynamic multiple-choice quiz using a given placeholder string that contains questions, answers, and correct choices. The output should include HTML, inline CSS, and inline JavaScript.

#         Please ensure the following:
#         - Generate at least 10 questions
#         - Each question has at least one correct answer.
#         - Each question has multiple choices (4).
#         - Two buttons: 'Next Question' and 'Previous Question' to navigate between questions.
#         - A 'Submit' button that validates the answer for each question and displays whether it was correct or not immediately below the question and provides an explanation for the answer before moving to the next one.
#         - An area to display a message indicating whether the selected answer is correct and a brief explanation for the correct answer.
#         - Handle cases where the input is incomplete or contains invalid answers by showing an error message.
#         - Generate a well-structured layout using inline CSS for styling the quiz.
#         - Include a "Next" button to move between questions, and a "Submit" button to show the final score at the end.
#         - Handle edge cases, such as when no answer is selected before clicking "Next".
#         - Include a progress bar that updates as the user moves through the quiz.
#         - Ensure responsive design for both mobile and desktop.

#         Here is the given placeholder string containing questions and answers:

#         {pdf_text}

#         Please generate only the HTML code with inline CSS and JavaScript code handling all necessary quiz functionality. No need to provide any text after the code.
#         """

#         # Call the Google Generative AI API to generate the quiz
#         model = genai.GenerativeModel("gemini-1.5-flash")
#         response = model.generate_content(
#             prompt,
#             safety_settings={
#                 HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_NONE,
#                 HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_NONE,
#             }
#         )

#         return jsonify({'quiz_content': response.text})

#     except Exception as e:
#         return jsonify({'error': str(e)})

# if __name__ == '__main__':
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# from google.generativeai.types import HarmCategory, HarmBlockThreshold
# import google.generativeai as genai
# from langchain_community.document_loaders import PyPDFLoader
# import tempfile
# import os
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Configure the Google Generative AI API
# genai.configure(api_key="AIzaSyDfWCutYJcWGNZTuMdwlmZhA0iriqwsDJk")

# # Function to extract text from a PDF
# def extract_text_from_pdf(pdf_path):
#     loader = PyPDFLoader(pdf_path)
#     pages = loader.load()
#     combined_text = ""
#     for page in pages:
#         combined_text += page.page_content + "\n"
#     return combined_text

# # API endpoint to handle PDF and generate the quiz
# @app.route('/generate-quiz', methods=['POST'])
# def generate_quiz():
#     try:
#         # Get the uploaded PDF file from the request
#         pdf_file = request.files['pdf']

#         # Create a temporary file to save the PDF
#         with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
#             pdf_path = tmp_file.name
#             pdf_file.save(pdf_path)

#         # Extract text from the PDF
#         pdf_text = extract_text_from_pdf(pdf_path)

#         # Generate the prompt for the Google Generative AI API
#         prompt = f"""
#         You are a web developer tasked with generating a dynamic multiple-choice quiz using a given placeholder string that contains questions, answers, and correct choices. The output should include HTML, inline CSS, and inline JavaScript.

#         Please ensure the following:
#         - Generate at least 10 questions
#         - Each question has at least one correct answer.
#         - Each question has multiple choices (4).
#         - Two buttons: 'Next Question' and 'Previous Question' to navigate between questions.
#         - A 'Submit' button that validates the answer for each question and displays whether it was correct or not immediately below the question and provides an explanation for the answer before moving to the next one.
#         - An area to display a message indicating whether the selected answer is correct and a brief explanation for the correct answer.
#         - Handle cases where the input is incomplete or contains invalid answers by showing an error message.
#         - Generate a well-structured layout using inline CSS for styling the quiz.
#         - Include a "Next" button to move between questions, and a "Submit" button to show the final score at the end.
#         - Handle edge cases, such as when no answer is selected before clicking "Next".
#         - Include a progress bar that updates as the user moves through the quiz.
#         - Ensure responsive design for both mobile and desktop.

#         Here is the given placeholder string containing questions and answers:

#         {pdf_text}

#         Please generate only the HTML code with inline CSS and JavaScript code handling all necessary quiz functionality. No need to provide any text after the code.
#         """

#         # Call the Google Generative AI API to generate the quiz
#         model = genai.GenerativeModel("gemini-1.5-flash")
#         response = model.generate_content(
#             prompt,
#             safety_settings={
#                 HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_NONE,
#                 HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_NONE,
#             }
#         )

#         return jsonify({'quiz_content': response.text})

#     except Exception as e:
#         return jsonify({'error': str(e)})

# if __name__ == '__main__':
#     app.run(debug=True)


# from flask import Flask, request, jsonify
# from google.generativeai.types import HarmCategory, HarmBlockThreshold
# import google.generativeai as genai
# from langchain_community.document_loaders import PyPDFLoader
# import os
# import tempfile

# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Configure the Google Generative AI API
# genai.configure(api_key="AIzaSyDfWCutYJcWGNZTuMdwlmZhA0iriqwsDJk")

# # Function to extract text from a PDF
# def extract_text_from_pdf(pdf_path):
#     loader = PyPDFLoader(pdf_path)
#     pages = loader.load()
#     combined_text = ""
#     for page in pages:
#         combined_text += page.page_content + "\n"
#     return combined_text

# # API endpoint to handle PDF and generate the quiz
# @app.route('/generate-quiz', methods=['POST'])
# def generate_quiz():
#     try:
#         # Get the uploaded PDF file from the request
#         pdf_file = request.files['pdf']

#         # Save the PDF to a temporary location
#         with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
#             pdf_path = tmp_file.name
#             pdf_file.save(pdf_path)

#         # Extract text from the PDF
#         pdf_text = extract_text_from_pdf(pdf_path)

#         # Generate the prompt for the Google Generative AI API
#         prompt = f"""
#         You are a web developer tasked with generating a dynamic multiple-choice quiz using a given placeholder string that contains questions, answers, and correct choices. The output should include HTML, inline CSS, and inline JavaScript.

#         Please ensure the following:
#         - Generate at least 10 questions
#         - Each question has at least one correct answer.
#         - Each question has multiple choices (4).
#         - Two buttons: 'Next Question' and 'Previous Question' to navigate between questions.
#         - A 'Submit' button that validates the answer for each question and displays whether it was correct or not immediately below the question and provides an explanation for the answer before moving to the next one.
#         - An area to display a message indicating whether the selected answer is correct and a brief explanation for the correct answer.
#         - Handle cases where the input is incomplete or contains invalid answers by showing an error message.
#         - Generate a well-structured layout using inline CSS for styling the quiz.
#         - Include a "Next" button to move between questions, and a "Submit" button to show the final score at the end.
#         - Handle edge cases, such as when no answer is selected before clicking "Next".
#         - Include a progress bar that updates as the user moves through the quiz.
#         - Ensure responsive design for both mobile and desktop.

#         Here is the given placeholder string containing questions and answers:

#         {pdf_text}

#         Please generate only the HTML code with inline CSS and JavaScript code handling all necessary quiz functionality. No need to provide any text after the code.
#         """

#         # Call the Google Generative AI API to generate the quiz
#         model = genai.GenerativeModel("gemini-1.5-flash")
#         response = model.generate_content(
#             prompt,
#             safety_settings={
#                 HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_NONE,
#                 HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_NONE,
#             }
#         )

#         # Debug: Print generated content and ensure it's not empty
#         print("Generated Quiz Content:", response.text)

#         return jsonify({'quiz_content': response.text})

#     except Exception as e:
#         return jsonify({'error': str(e)})

# if __name__ == '__main__':
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# import google.generativeai as genai
# from langchain_community.document_loaders import PyPDFLoader
# import os
# import tempfile

# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Configure the Google Generative AI API
# genai.configure(api_key="AIzaSyDfWCutYJcWGNZTuMdwlmZhA0iriqwsDJk")

# # Function to extract text from a PDF
# def extract_text_from_pdf(pdf_path):
#     loader = PyPDFLoader(pdf_path)
#     pages = loader.load()
#     combined_text = ""
#     for page in pages:
#         combined_text += page.page_content + "\n"
#     return combined_text

# # Function to generate quiz using the Gemini API
# def generate_quiz_from_text(pdf_text):
#     prompt = f"""
#     You are a developer tasked with generating a dynamic quiz based on the following text extracted from a PDF. The quiz should meet the following criteria:
    
#     - Generate 15 multiple-choice questions (MCQs).
#     - Each question should have 4 options: 1 correct and 3 incorrect.
#     - Provide an explanation for the correct answer for each question.
#     - Format the output in JSON, where each question has:
#         - "question": the question text,
#         - "options": an array of 4 options (A, B, C, D),
#         - "correct_answer": the correct option (e.g., "Option A"),
#         - "explanation": a brief explanation for the correct answer.

#     Here is the text to base the quiz on:

#     {pdf_text}

#     Generate the quiz in JSON format with 15 questions.
#     """

#     # Generate content using the Google Generative AI API
#     model = genai.GenerativeModel("gemini-1.5-flash")
#     response = model.generate_content(prompt)

#     # Parse and return the quiz in JSON format
#     quiz_data = response.text
#     return quiz_data

# # API endpoint to handle PDF and generate the quiz
# @app.route('/generate-quiz', methods=['POST'])
# def generate_quiz():
#     try:
#         # Get the uploaded PDF file from the request
#         pdf_file = request.files['pdf']

#         # Save the PDF to a temporary location
#         with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
#             pdf_path = tmp_file.name
#             pdf_file.save(pdf_path)

#         # Extract text from the PDF
#         pdf_text = extract_text_from_pdf(pdf_path)

#         # Generate quiz data using the Google Generative AI API
#         quiz_data = generate_quiz_from_text(pdf_text)

#         return jsonify({'quiz': quiz_data})

#     except Exception as e:
#         return jsonify({'error': str(e)})

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
from google.generativeai.types import HarmCategory, HarmBlockThreshold
import google.generativeai as genai
from langchain_community.document_loaders import PyPDFLoader
import os
import tempfile
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure the Google Generative AI API
genai.configure(api_key="AIzaSyDfWCutYJcWGNZTuMdwlmZhA0iriqwsDJk")

# Function to extract text from a PDF
def extract_text_from_pdf(pdf_path):
    loader = PyPDFLoader(pdf_path)
    pages = loader.load()
    combined_text = ""
    for page in pages:
        combined_text += page.page_content + "\n"
    return combined_text

# API endpoint to handle PDF and generate the quiz
@app.route('/generate-quiz', methods=['POST'])
def generate_quiz():
    try:
        # Get the uploaded PDF file from the request
        pdf_file = request.files['pdf']

        # Save the PDF to a temporary location
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
            pdf_path = tmp_file.name
            pdf_file.save(pdf_path)

        # Extract text from the PDF
        pdf_text = extract_text_from_pdf(pdf_path)

        # Generate the prompt for the Google Generative AI API
        prompt = f"""
        You are a web developer tasked with generating a dynamic multiple-choice quiz using a given placeholder string that contains questions, answers, and correct choices. The output should include HTML, inline CSS, and inline JavaScript.

        Please ensure the following:
        - Generate at least 10 questions
        - Each question has at least one correct answer.
        - Each question has multiple choices (4).
        - Two buttons: 'Next Question' and 'Previous Question' to navigate between questions.
        - A 'Submit' button that validates the answer for each question and displays whether it was correct or not immediately below the question and provides an explanation for the answer before moving to the next one.
        - An area to display a message indicating whether the selected answer is correct and a brief explanation for the correct answer.
        - Handle cases where the input is incomplete or contains invalid answers by showing an error message.
        - Generate a well-structured layout using inline CSS for styling the quiz.
        - Include a "Next" button to move between questions, and a "Submit" button to show the final score at the end.
        - Handle edge cases, such as when no answer is selected before clicking "Next".
        - Include a progress bar that updates as the user moves through the quiz.
        - Ensure responsive design for both mobile and desktop.

        Here is the given placeholder string containing questions and answers:

        {pdf_text}

        Please generate only the HTML code with inline CSS and JavaScript code handling all necessary quiz functionality. No need to provide any text after the code.
        """

        # Call the Google Generative AI API to generate the quiz
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(
            prompt,
            safety_settings={
                HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_NONE,
                HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_NONE,
            }
        )

        # Debug: Print generated content and ensure it's not empty
        print("Generated Quiz Content:", response.text)

        return jsonify({'quiz_content': response.text})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
