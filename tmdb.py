import os
import requests
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

API_KEY = os.getenv("API_KEY")
BASE_URL = "https://api.themoviedb.org/3"


# removes all person results from a given response (the search endpoint used queries movies, tv shows, AND people)
def remove_people(response_json):
    for result in response_json["results"]:
        if result["media_type"] == "person":
            response_json["results"].remove(result)


def api_search(title):
    response = requests.get(
        BASE_URL
        + f"/search/multi?api_key={API_KEY}&language=en-US&query={title}&page=1"
    )
    response_json = response.json()
    remove_people(response_json)
    return response_json
