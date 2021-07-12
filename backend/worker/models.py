from enum import unique
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Feeds(Base):
    __tablename__ = 'feeds'
    id = Column(Integer, primary_key=True)
    url = Column(String(), unique=True)
    title = Column(String())
    language = Column(String())
    description = Column(String())
    created = Column(DateTime, server_default=func.now())
    last_updated = Column(DateTime)
    entries = relationship('Entries', backref='feeds', lazy='dynamic')

class Entries(Base):
    __tablename__ = 'entries'
    id = Column(Integer, primary_key=True)
    title = Column(String())
    url = Column(String(), unique=True)
    description = Column(String())
    published = Column(DateTime)
    feed_id = Column(Integer, ForeignKey('feeds.id'))
