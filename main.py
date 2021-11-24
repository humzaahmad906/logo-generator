from flask import Flask, jsonify
import json

app = Flask(__name__)

categories = json.load(open("material-design-icons-3.0.1/files.json", "r"))


@app.route("/get_categories", methods=['GET'])
def get_categories():
    response = jsonify(categories)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
