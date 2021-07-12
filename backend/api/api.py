import re
from flask import Flask, request, abort, jsonify
from sqlalchemy.engine import url
from sqlalchemy import exc
import config
from models import db, Feeds, Entries, EntriesSchema, ma

app = Flask(__name__)
app.config.from_object(config.DevelopmentConfig)
db.init_app(app)
ma.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/v1', methods=['GET'])
def index():
    return "BIGRSS API"

@app.route('/v1/feed', methods=['POST'])
def add_feed():
    data = request.json
    if not 'url' in data:
        abort(422)
    feed = Feeds(url=data['url'])
    try:
        db.session.add(feed)
        db.session.commit()
        return jsonify(f"Added {data['url']} to feed list")
    except exc.IntegrityError:
        db.session.rollback()
        return jsonify("Error occurred!"), 400

@app.route('/v1/stats', methods=['GET'])
def stats():
    total_feeds = db.session.query(Feeds).count()
    total_entries = db.session.query(Entries).count()
    return_dict = {'feeds': total_feeds, "entries": total_entries}
    return return_dict

@app.route('/v1/search/<query>', methods=['GET'])
def search(query):
    result_schema = EntriesSchema(many=True)
    result = Entries.query.filter(Entries.description.match(query)).all()
    return jsonify(result_schema.dump(result))
app.run()