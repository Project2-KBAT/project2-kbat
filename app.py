# pylint: disable = E1101, C0413, W1508, R0903, W0603, E0401

"""
Provides all the functions such as creating a model to store data in the database,
sign up, sign in, sign out, saving favorite artists according to each user.
"""
import os
import json
import random
import flask

from flask_login import login_user, current_user, LoginManager, logout_user
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from tmdb import get_lyrics_link

from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

app = flask.Flask(__name__, static_folder="./build/static")
# This tells our Flask app to look at the results of `npm build` instead of the
# actual files in /templates when we're looking for the index page file. This allows
# us to load React code into a webpage. Look up create-react-app for more reading on
# why this is necessary.
bp = flask.Blueprint("bp", __name__, template_folder="./build")
# Point SQLAlchemy to your Heroku database
db_url = os.getenv("DATABASE_URL")
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)
app.config["SQLALCHEMY_DATABASE_URI"] = db_url
# Gets rid of a warning
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = b"I am a secret key!"  # don't defraud my app ok?


##### MODELS #####
db = SQLAlchemy(app)


class User(UserMixin, db.Model):
    """
    Initialize User model to store the registered user.
    """

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))
    password = db.Column(db.String(120))

    def __repr__(self):
        return f"<User {self.email}>"

    def get_username(self):
        """ """
        return self.email


class Artist(db.Model):
    """ """

    id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.String(80), nullable=False)
    username = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f"<Artist {self.artist_id}>"


db.create_all()


### ROUTES ###
@bp.route("/index")
def index():
    (poster_path, title, vote_average) = get_lyrics_link()
    result = [
        {"poster_path": poster_path, "title": title, "vote_average": vote_average}
        for poster_path, title, vote_average in zip(poster_path, title, vote_average)
    ]
    artist_data = {
        "result": result,
    }
    data = json.dumps(artist_data)
    print(data)

    return flask.render_template(
        "index.html",
        data=data,
    )


app.register_blueprint(bp)

login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_name):
    """
    Load user given an id.
    """
    return User.query.get(user_name)


@app.route("/signout", methods=["POST"])
def logout():
    """
    Log out of the current account and return to the login page.
    """
    logout_user()
    return flask.redirect(flask.url_for("login"))


@app.route("/signup")
def signup():
    """
    Render a signup page.
    """
    return flask.render_template("signup.html")


@app.route("/signup", methods=["POST"])
def signup_post():
    """
    Get username from input text, check if this username is registered or not.
    If registered, do not allow that username to be saved to the database.
    Otherwise, allow that username to be saved to the database.
    Finally, it will go to the login page.
    """
    email = flask.request.form.get("email")
    password = flask.request.form.get("password")
    user = User.query.filter_by(email=email).first()
    if user:
        pass
    else:
        user = User(email=email, password=password)
        db.session.add(user)
        db.session.commit()

    return flask.redirect(flask.url_for("login"))


@app.route("/login")
def login():
    """
    Render a login page.
    """
    return flask.render_template("login.html")


@app.route("/login", methods=["POST"])
def login_post():
    """
    Get username from input text, check if this username is registered or not.
    If registered, it will go to the index page. Otherwise, show error message.
    """
    email = flask.request.form.get("email")
    password = flask.request.form.get("password")
    user = User.query.filter_by(email=email).first()
    if user and (user.password == password):
        login_user(user)
        return flask.redirect(flask.url_for("bp.index"))
    return flask.jsonify({"status": 401, "reason": "Username or Password Error"})


@app.route("/")
def main():
    """
    If the user has logged in before, it will go to the index page.
    Otherwise, it will stay at the login page.
    """
    if current_user.is_authenticated:
        return flask.redirect(flask.url_for("bp.index"))
    return flask.redirect(flask.url_for("login"))


@app.route("/save", methods=["POST"])
def save():
    artist_ids = flask.request.json.get("new_artist")
    print(artist_ids)
    return flask.jsonify({"status": 401, "reason": "Invalid artist ID entered"})


if __name__ == "__main__":
    app.run(
        host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 8084)), debug=True
    )
