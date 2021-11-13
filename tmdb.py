# pylint: disable = E0401

"""
Provides a function to get data from themoviedb.
"""
import os
import requests

URL_IMAGE = "https://www.themoviedb.org/t/p/w185_and_h278_multi_faces"


def get_popular_movie():
    """
    abc
    """
    tmdb_response = requests.get(
        "https://api.themoviedb.org/3/movie/popular?api_key="
        + os.getenv("API_KEY")
        + "&language=en-US&page=1",
    )
    tmdb_response_json = tmdb_response.json()

    id_movie = []
    poster_path = []
    title = []
    vote_average = []
    release_date = []
    popularity = []

    for i in range(20):
        id_movie.append(tmdb_response_json["results"][i]["id"])
        poster_path.append(
            "".join([URL_IMAGE, tmdb_response_json["results"][i]["poster_path"]])
        )
        title.append(tmdb_response_json["results"][i]["title"])
        vote_average.append(tmdb_response_json["results"][i]["vote_average"])
        release_date.append(tmdb_response_json["results"][i]["release_date"])
        popularity.append(tmdb_response_json["results"][i]["popularity"])
    return (id_movie, poster_path, title, vote_average, release_date, popularity)


def get_top_rated_movie():
    """
    abc
    """
    tmdb_response = requests.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key="
        + os.getenv("API_KEY")
        + "&language=en-US&page=1",
    )
    tmdb_response_json = tmdb_response.json()

    poster_path = []
    title = []
    vote_average = []
    release_date = []
    popularity = []

    for i in range(20):
        poster_path.append(
            "".join([URL_IMAGE, tmdb_response_json["results"][i]["poster_path"]])
        )
        title.append(tmdb_response_json["results"][i]["title"])
        vote_average.append(tmdb_response_json["results"][i]["vote_average"])
        release_date.append(tmdb_response_json["results"][i]["release_date"])
        popularity.append(tmdb_response_json["results"][i]["popularity"])
    return (poster_path, title, vote_average, release_date, popularity)


def get_detail_movie(id_movie):
    """
    abc
    """
    tmdb_response = requests.get(
        "https://api.themoviedb.org/3/movie/"
        + id_movie
        + "?api_key="
        + os.getenv("API_KEY")
        + "&language=en-US",
    )
    tmdb_response_json = tmdb_response.json()

    genres_temp = []

    poster_path = "".join([URL_IMAGE, tmdb_response_json["poster_path"]])
    title = tmdb_response_json["title"]
    release_date = tmdb_response_json["release_date"]
    runtime = tmdb_response_json["runtime"]
    for i in tmdb_response_json["genres"]:
        genres_temp.append(i["name"])
    genres = ", ".join(genres_temp)
    overview = tmdb_response_json["overview"]
    homepage = tmdb_response_json["homepage"]

    return (poster_path, title, release_date, runtime, genres, overview, homepage)
