# pylint: disable = E0401

"""
Provides a function to get data from Genius.
"""
import os
import requests

URL_IMAGE = "https://www.themoviedb.org/t/p/w185_and_h278_multi_faces"


def get_lyrics_link():
    """
    Given a song name, query Genius using the search API and return a link to the top
    result.
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

    for i in range(20):
        poster_path.append(
            "".join([URL_IMAGE, tmdb_response_json["results"][i]["poster_path"]])
        )
        title.append(tmdb_response_json["results"][i]["title"])
        vote_average.append(tmdb_response_json["results"][i]["vote_average"])
    return (poster_path, title, vote_average)
