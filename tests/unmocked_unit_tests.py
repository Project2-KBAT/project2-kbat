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

from tmdb import api_search, get_top_rated_movie

INPUT = "INPUT"
EXPECTED_OUTPUT = "EXPECTED_OUTPUT"


"""
VERSION 2: ONE TEST CASE PER FUNCTION
This is the test case organization method I prefer, but I didn't
cover it in class. Note how it frees us up to test multiple helper
functions in a single class.
"""


class tmbdHelperTests(unittest.TestCase):
    def test_api_search_1(self):
        self.assertEqual(api_search(None))

    def test_api_search_2(self):
        self.assertEqual(api_search({"name": "title"}))

    def test_api_search_3(self):
        # This is a big enough JSON that we should probably split it out for
        # readability
        title_json = {
            "name": "title",
        }
        self.assertEqual(api_search(title_json))

    """"""

    def test_get_top_rated_movie_1(self):
        self.assertEqual(get_top_rated_movie({}), (None, None, None, None, None))

    def test_get_top_rated_movie_2(self):
        self.assertEqual(
            get_top_rated_movie({"name": "title"}), ("title", None, None, None, None)
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


if __name__ == "__main__":
    unittest.main()
