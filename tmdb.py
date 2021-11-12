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
