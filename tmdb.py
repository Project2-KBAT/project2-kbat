import os
import requests
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

API_KEY = os.getenv("API_KEY")
BASE_URL = "https://api.themoviedb.org/3"


def search(title):
    response = requests.get(
        BASE_URL
        + f"/search/multi?api_key={API_KEY}&language=en-US&query={title}&page=1"
    )
    return response.json()
