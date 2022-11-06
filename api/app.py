from os import environ
import logging, json

from flask import Flask, jsonify

from flask_cors import CORS
from httpx import AsyncClient
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)


@app.route("/trends/<int:id>", methods=["GET"])
async def get_trends(id):
    params = {"id": id}
    headers = {"Authorization": f"Bearer {environ.get('TWITTER_USER_TOKEN')}"}
    url = "https://api.twitter.com/1.1/trends/place.json"

    async with AsyncClient() as client:
        response = await client.get(url, params=params, headers=headers)

    data = response.json()
    logging.error(json.dumps(data))

    trends = data[0].get("trends", []) if len(data) > 0 else []
    return jsonify({"success": True, "trends": trends}), 200


if __name__ == "__main__":
    load_dotenv(".env")
    app.run(host="0.0.0.0")
