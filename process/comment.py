import json
import flask


def get_detail(db, username):
    username = current_user.username
    movie_id = flask.request.json.get("movie_id")
    comment_movie = flask.request.json.get("comment_movie")
    date_comment = flask.request.json.get("date")
    hour_comment = flask.request.json.get("hour")

    db.session.add(
        Comment(
            username=username,
            movie_id=movie_id,
            comment=comment_movie,
            date=date_comment,
            hour=hour_comment,
        )
    )
    db.session.commit()

    return flask.jsonify({"status": 200, "message": "Successful"})
