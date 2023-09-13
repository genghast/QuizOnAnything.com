from flask import Flask, request, jsonify
from flask_cors import CORS

import quiz_model

app = Flask(__name__)
CORS(app)

# need to make an api endpoint to get the data in a json schema so that you can get all the info


@app.route('/process', methods=['POST'])
def process_data():
    # Receive JSON object from frontend
    data = request.get_json()

    topic = data['topic']
    questions_obj = quiz_model.gpt_response(topic)

    return jsonify(questions_obj)


if __name__ == '__main__':
    port = 3000
    app.run(port=port, debug=True)
