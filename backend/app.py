
from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    df = pd.read_csv(file)
    summary = f"Uploaded {df.shape[0]} rows and {df.shape[1]} columns."
    return jsonify({"summary": summary})

if __name__ == '__main__':
    app.run(debug=True)
