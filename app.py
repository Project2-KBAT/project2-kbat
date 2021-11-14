# pylint: disable=no-member
# pylint: disable=wrong-import-position
# pyling: disable=invalid-envvar-default
# pylint: disable=too-few-public-methods
# pylint: disable=global-statement

import os
import flask
from tmdb import api_search

app = flask.Flask(__name__, static_folder="./build/static")
bp = flask.Blueprint("bp", __name__, template_folder="./build")


@bp.route("/")
def main():
    return flask.render_template(
        "index.html",
    )


app.register_blueprint(bp)


@app.route("/search", methods=["POST"])
def search():
    title = flask.request.json.get("title")
    return api_search(title)


if __name__ == "__main__":
    app.run(
        host=os.getenv("IP", "0.0.0.0"),
        port=int(os.getenv("PORT", "8080")),
        debug=True,
    )
