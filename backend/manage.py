from worker.feed import parse_feed
from datetime import datetime, timedelta
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from worker.models import Feeds, Entries
from dotenv import load_dotenv
import os

load_dotenv()

hours_ago = datetime.today() - timedelta(hours = 2)

engine = create_engine(os.environ.get('BRSS_BACKEND_DB_CONNECTION'), echo = True)

Session = sessionmaker(bind = engine)
session = Session()

feeds_to_update = session.query(Feeds).filter(Feeds.last_updated <= hours_ago).all()
new_feeds = session.query(Feeds).filter(Feeds.last_updated == None).all()
print(feeds_to_update)

if feeds_to_update:
    for item in feeds_to_update:
        parse_feed(item.url)

if new_feeds:
    for item in new_feeds:
        parse_feed(item.url)
#parse_feed('https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en')