import flask
from flask import Flask, render_template, request, redirect, session, url_for
from flask_login import login_user, logout_user, current_user, LoginManager
from flask_login.utils import login_required
import random
import base64
import requests
import os
import json
import secrets
import psycopg2
from dotenv import load_dotenv, find_dotenv
from flask_login import UserMixin
from genius import get_lyrics_link
from spotify import get_access_token, get_song_data


load_dotenv(find_dotenv())


from flask_sqlalchemy import SQLAlchemy

app = flask.Flask(__name__, static_folder="./build/static")
# Point SQLAlchemy to your Heroku database
db_url = os.getenv("DATABASE_URL")
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)
app.config["SQLALCHEMY_DATABASE_URI"] = db_url
# Gets rid of a warning
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = secrets.token_hex(16)


db = SQLAlchemy(app)


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))

    def __repr__(self):
        return f"<User {self.username}>"

    def get_username(self):
        return self.username


class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.String(80), nullable=False)
    username = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f"<Artist {self.artist_id}>"


db.create_all()

# This tells our Flask app to look at the results of `npm build` instead of the
# actual files in /templates when we're looking for the index page file. This allows
# us to load React code into a webpage. Look up create-react-app for more reading on
# why this is necessary.
bp = flask.Blueprint("bp", __name__, template_folder="./build")


@bp.route("/main")
@login_required
def index():
    # TODO: insert the data fetched by your app main page here as a JSON
    return flask.render_template("index.html")


app.register_blueprint(bp)

login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_name):
    return User.query.get(user_name)


@app.route("/signup")
def signup():
    return flask.render_template("signup.html")


@app.route("/increment", methods=["POST"])
def increment():
    num_clicks = flask.request.json.get("num_clicks")
    return flask.jsonify({"num_clicks_server": num_clicks + 1})


@app.route("/signup", methods=["POST"])
def signup_post():
    username = flask.request.form.get("username")
    user = User.query.filter_by(username=username).first()
    if user:
        pass
    else:
        user = User(username=username)
        db.session.add(user)
        db.session.commit()

    return flask.redirect(flask.url_for("login"))


@app.route("/login")
def login():
    return flask.render_template("login.html")


@app.route("/login", methods=["POST"])
def login_post():
    username = flask.request.form.get("username")
    user = User.query.filter_by(username=username).first()
    if user:
        login_user(user)
        return render_template("success.html")

    else:
        return render_template("wrong_combo.html")  # if the username or password


# Step -6(creating route for logging out)
@login_required
@app.route("/logout")
def logout():
    logout_user()
    if session.get("was_once_logged_in"):
        # prevent flashing automatically logged out message
        del session["was_once_logged_in"]
    flask.flash("You have successfully logged yourself out.")
    return redirect("/login")


@app.route("/save", methods=["POST"])
def save():
    artist_id = flask.request.form.get("artist_id")
    try:
        access_token = get_access_token()
        get_song_data(artist_id, access_token)
    except Exception:
        flask.flash("Invalid Artist ID input")
        return flask.redirect(flask.url_for("bp.index"))

    username = current_user.username
    db.session.add(Artist(artist_id=artist_id, username=username))
    db.session.commit()
    return flask.redirect(flask.url_for("bp.index"))


@app.route("/")
def home():
    if current_user.is_authenticated:
        return flask.redirect(flask.url_for("bp.main"))
    return render_template("welcome.html")


"""
@app.route("/index")
@login_required
def index():
    artists = Artist.query.filter_by(username=current_user.username).all()
    artist_ids = [a.artist_id for a in artists]
    has_artists_saved = len(artist_ids) > 0
    if has_artists_saved:
        artist_id = random.choice(artist_ids)
        # API calls
        access_token = get_access_token()
        (
            song_album,
            song_name,
            song_artist,
            song_image_url,
            preview_url,
        ) = get_song_data(artist_id, access_token)
        genius_url = get_lyrics_link(song_name)
    else:
        (
            song_album,
            song_name,
            song_artist,
            song_image_url,
            preview_url,
            genius_url,
        ) = (
            None,
            None,
            None,
            None,
            None,
            None,
        )
    return flask.render_template(
        "index.html",
        has_artists_saved=has_artists_saved,
        song_album=song_album,
        song_name=song_name,
        song_artist=song_artist,
        song_image_url=song_image_url,
        preview_url=preview_url,
        genius_url=genius_url,
    )
"""

if __name__ == "__main__":
    app.run(
        host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 5001)), debug=True
    )
