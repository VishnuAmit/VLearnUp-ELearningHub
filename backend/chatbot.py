# from flask import Flask, request, jsonify
# import google.generativeai as genai
# from google.generativeai.types import HarmCategory, HarmBlockThreshold
# from langchain_core.runnables.history import RunnableWithMessageHistory

# app = Flask(__name__)

# # Configure the Google Generative AI API
# API_KEY = "AIzaSyDfWCutYJcWGNZTuMdwlmZhA0iriqwsDJk"
# genai.configure(api_key=API_KEY)

# # Initialize Session State for Chat History
# chat_history = []

# @app.route('/chat', methods=['POST'])
# def chat():
#     global chat_history
#     user_input = request.json.get('message')
#     if user_input:
#         # Add User Message to History
#         chat_history.append({"role": "user", "content": user_input})

#         # Initialize Gemini LLM
#         model = genai.GenerativeModel("gemini-1.5-flash")
        
#         # Create prompt with conversation history
#         history_text = "\n".join([f"{msg['role'].capitalize()}: {msg['content']}" for msg in chat_history])
#         prompt = f"Continue the conversation:\n{history_text}\nUser: {user_input}\nChatbot:"

#         # Generate Chatbot Response
#         response = model.generate_content(
#             prompt=prompt,
#             safety_settings={
#                 HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_NONE,
#                 HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_NONE,
#             }
#         )

#         bot_response = response.text

#         # Add Chatbot Response to History
#         chat_history.append({"role": "chatbot", "content": bot_response})

#         return jsonify({'response': bot_response, 'messages': chat_history})

#     return jsonify({'error': 'No message provided'}), 400

# if __name__ == '__main__':
#     app.run(port=5001, debug=True)  # Run on a different port to avoid conflict with your main Flask app


from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from google.generativeai.types import HarmCategory, HarmBlockThreshold
from dotenv import load_dotenv  
import os


app = Flask(__name__)
CORS(app)

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

chat_history = []


@app.route('/chat', methods=['POST'])
def chat():
    global chat_history
    try:
        user_input = request.json.get('message')
        if user_input:
            chat_history.append({"role": "user", "content": user_input})
            chat_history.append({"role": "user" "content": "Your are a chatbot in an Educational site."})
            model = genai.GenerativeModel("gemini-1.5-flash")

            chat = model.start_chat(
                history=[
                    {"role": "user", "parts": user_input},
                    
                ]
            )

            bot_response = chat.send_message("Continue the conversation:\n" + "\n".join([f"{msg['role'].capitalize()}: {msg['content']}" for msg in chat_history]))

            print("Bot response:", bot_response.text)

            chat_history.append({"role": "chatbot", "content": bot_response.text})

            return jsonify({'response': bot_response.text})

        return jsonify({'error': 'No message provided'}), 400

    except Exception as e:
        print("Error:", str(e)) 
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)
