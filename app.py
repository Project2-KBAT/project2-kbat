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
from tmdb import (
    get_popular_movie,
    get_top_rated_movie,
    get_detail_movie,
    get_search_movie,
)

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


class Rating(db.Model):
    """ """

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(80), nullable=False)
    movie_id = db.Column(db.String(80), nullable=False)
    rating = db.Column(db.Integer)

    def __repr__(self):
        return f"<Rating {self.rating}>"


db.create_all()


### ROUTES ###
@bp.route("/index")
def index():
    (
        id_movie,
        poster_path,
        title,
        vote_average,
        release_date,
        popularity,
    ) = get_popular_movie()
    popular_movie = [
        {
            "id_movie": id_movie,
            "poster_path": poster_path,
            "title": title,
            "vote_average": vote_average,
            "release_date": release_date,
            "popularity": popularity,
        }
        for id_movie, poster_path, title, vote_average, release_date, popularity in zip(
            id_movie, poster_path, title, vote_average, release_date, popularity
        )
    ]

    (poster_path, title, vote_average, release_date, popularity) = get_top_rated_movie()
    top_rated_movie = [
        {
            "poster_path": poster_path,
            "title": title,
            "vote_average": vote_average,
            "release_date": release_date,
            "popularity": popularity,
        }
        for poster_path, title, vote_average, release_date, popularity in zip(
            poster_path, title, vote_average, release_date, popularity
        )
    ]

    movie_data = {
        "popular_movie": popular_movie,
        "top_rated_movie": top_rated_movie,
    }
    data = json.dumps(movie_data)

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


@app.route("/detail", methods=["POST"])
def detail():
    """
    Get artist_id from input text, check if this artist_id is valid or not.
    If invalid, it won't be saved to the database. Otherwise, check its existence in the database.
    If it already exists in the database, save it. Otherwise, don't save it.
    """
    movie_id = flask.request.json.get("movie_id")
    (
        poster_path,
        title,
        release_date,
        runtime,
        genres,
        overview,
        homepage,
    ) = get_detail_movie(movie_id)
    detail_movie = {
        "poster_path": poster_path,
        "title": title,
        "release_date": release_date,
        "runtime": runtime,
        "genres": genres,
        "overview": overview,
        "homepage": homepage,
    }
    data = json.dumps(detail_movie)
    print(data)
    return flask.jsonify({"status": 200, "detail": data})


@app.route("/search", methods=["POST"])
def search():
    """
    Get artist_id from input text, check if this artist_id is valid or not.
    If invalid, it won't be saved to the database. Otherwise, check its existence in the database.
    If it already exists in the database, save it. Otherwise, don't save it.
    """
    movie_name = flask.request.json.get("movie_name")
    (
        id_movie,
        poster_path,
        title,
        vote_average,
        release_date,
        popularity,
    ) = get_search_movie(movie_name)
    search_movie = [
        {
            "id_movie": id_movie,
            "poster_path": poster_path,
            "title": title,
            "vote_average": vote_average,
            "release_date": release_date,
            "popularity": popularity,
        }
        for id_movie, poster_path, title, vote_average, release_date, popularity in zip(
            id_movie, poster_path, title, vote_average, release_date, popularity
        )
    ]

    movie_data = {
        "search_movie": search_movie,
    }
    data = json.dumps(movie_data)

    return flask.jsonify({"status": 200, "search": data})


app.run(
    host=os.getenv("IP", "0.0.0.0"),
    port=int(os.getenv("PORT", 8085)),
)
