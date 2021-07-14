import feedparser
from sqlalchemy import create_engine, func
from sqlalchemy.orm import sessionmaker
from worker.models import Feeds, Entries
import os
from dotenv import load_dotenv

load_dotenv()

import ssl
if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context

engine = create_engine(os.environ.get('BRSS_BACKEND_DB_CONNECTION'), echo = True)

Session = sessionmaker(bind = engine)
session = Session()

def parse_feed(url):
    data = feedparser.parse(url)
    print(data.feed.title)
    if "language" not in data.feed:
        data.feed.language = 'unknown'

    print(data.feed.title)
    print(data.feed.description)
    print("-----------------")
    session.query(Feeds).filter(Feeds.url == url).update({Feeds.title: data.feed.title, Feeds.description: data.feed.description, Feeds.language: data.feed.language, Feeds.last_updated: func.now()})
    session.commit()
    feed_id = session.query(Feeds).filter(Feeds.url == url).first().id
    for item in data.entries:
        try:
            new_entry = Entries(title=item.title, url=item.link, description=item.description, published=item.published, feed_id=feed_id)
            session.add(new_entry)
            session.commit()
        except:
            print("Failed, or already exists...")
