from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os

app = Flask(__name__)
CORS(app)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.route("/chat", methods=["POST"])
def chat():
    message = request.json["message"]

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are Karthik's AI assistant."},
            {"role": "user", "content": message}
        ]
    )

    return jsonify({
        "reply": response.choices[0].message.content
    })

@app.route("/contact", methods=["POST"])
def contact():
    data = request.json
    # Save to DB here later
    return jsonify({"status": "Message stored successfully"})
    
if __name__ == "__main__":
    app.run(debug=True)
