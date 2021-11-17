import unittest
from unittest.mock import MagicMock, patch
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

from app import comment, Comment
from tmdb import get_detail_movie

INPUT = "INPUT"
EXPECTED_OUTPUT = "EXPECTED_OUTPUT"


class CommentTests(unittest.TestCase):
    def setup(self):
        self.db_mock = [
            Comment(
                username="test",
                movie_id="550",
                comment="this movie sucks",
                date="11/16/2021",
                hour="13:23",
            )
        ]

    def mock_add_to_db(self, comment):
        self.db_mock.append(comment)

    def mock_db_commit(self):
        pass

    def test_comment(self):
        with patch("app.db.session.add", self.mock_add_to_db):
            with patch("app.db.session.commit", self.mock_db_commit):
                mock_filtered = MagicMock()
                mock_filtered.all.return_value = self.db_mock
                comment()
                self.assertEqual(len(self.db_mock), 2)


class GetDetailMovieTests(unittest.TestCase):
    def test_get_detail_movie(self):
        with patch("tmdb.requests.get") as mock_requests_get:
            mock_response = MagicMock()
            mock_response.json.side_effect = [
                {},
                {
                    "genres": [{"id": 18, "name": "Drama"}],
                    "overview": 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
                    "poster_path": null,
                    "release_date": "1999-10-12",
                    "runtime": 139,
                    "title": "Fight Club",
                },
            ]
            mock_requests_get.return_value = mock_response

            self.assertEqual(
                get_detail_movie("550"),
                (
                    "https://www.themoviedb.org/t/p/w185_and_h278_multi_faces",
                    "Fight Club",
                    "1999-10-12",
                    139,
                    ["Drama"],
                    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
                ),
            )


if __name__ == "__main__":
    unittest.main()
