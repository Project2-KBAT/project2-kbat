import unittest
import sys
import os

# getting the name of the directory
# where the this file is present.
current = os.path.dirname(os.path.realpath(__file__))

# Getting the parent directory name
# where the current directory is present.
parent = os.path.dirname(current)

# adding the parent directory to
# the sys.path.
sys.path.append(parent)

from tmdb import api_search, get_top_rated_movie, get_detail_movie

INPUT = "INPUT"
EXPECTED_OUTPUT = "EXPECTED_OUTPUT"


"""
VERSION 2: ONE TEST CASE PER FUNCTION
This is the test case organization method I prefer, but I didn't
cover it in class. Note how it frees us up to test multiple helper
functions in a single class.
"""

"""
search_input = input("Gimme something to search: ")
load_req = "Loading your search request "  #%s is the variable
print(load_req + search_input + "...")
response = api_search(search_input)
print(response)
"""

# the test api_search is based off the code above which works... just not working for the unit testing


class tmbdHelperTests(unittest.TestCase):
    def test_api_search_1(self):
        # empty case

        # self.assertEqual(api_search(None))
        self.assertEqual(api_search(""))

    def test_api_search_2(self):
        # ask for input
        try:
            search_input = input("Gimme something to search: ")
            self.assertEqual(api_search(search_input))
        except:
            self.assertEqual(api_search("The Eternals"))

    def test_api_search_3(self):
        # This is a big enough JSON that we should probably split it out for
        # readability
        search_input = input("Gimme something to search: ")
        title_json = search_input
        self.assertEqual(api_search(title_json))

    """"""

    def test_get_top_rated_movie_1(self):
        self.assertEqual(get_top_rated_movie(""), ([], [], [], [], []))

    def test_get_top_rated_movie_2(self):
        self.assertEqual(
            get_top_rated_movie("Shang-Chi and the Legend of the Ten Rings"),
            ([], [], [], [], []),
        )

    def test_get_top_rated_movie_3(self):
        # This is a big enough JSON that we should probably split it out for
        # readability

        top_movie_json = {
            "poster_path": "https://www.themoviedb.org/t/p/w185_and_h278_multi_faces/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
            "title": "Shang-Chi and the Legend of the Ten Rings",
            "vote_average": "7.9/10",
            "release_date": "2021-09-01",
            "popularity": "9993.05",
        }
        self.assertEqual(
            get_top_rated_movie(top_movie_json),
            (
                "https://www.themoviedb.org/t/p/w185_and_h278_multi_faces/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
                "Shang-Chi and the Legend of the Ten Rings",
                "7.9/10",
                "2021-09-01",
                "9993.05",
            ),
        )

    def test_get_detail_movie_1(self):
        self.assertEqual(get_detail_movie(""), ([], [], [], [], [], [], []))

    def test_get_detail_movie_2(self):
        self.assertEqual(
            get_detail_movie("Shang-Chi and the Legend of the Ten Rings"),
            ([], [], [], [], [], [], []),
        )


if __name__ == "__main__":
    unittest.main()
