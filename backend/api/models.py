from enum import unique
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()

class Feeds(db.Model):
    __tablename__ = 'feeds'
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(), unique=True)
    title = db.Column(db.String())
    language = db.Column(db.String())
    description = db.Column(db.String())
    created = db.Column(db.DateTime, server_default=db.func.now())
    last_updated = db.Column(db.DateTime)
    entries = db.relationship('Entries', backref='feeds', lazy='dynamic')

class Entries(db.Model):
    __tablename__ = 'entries'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    url = db.Column(db.String(), unique=True)
    description = db.Column(db.String())
    published = db.Column(db.DateTime)
    feed_id = db.Column(db.Integer, db.ForeignKey('feeds.id'))

class EntriesSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Entries

    id = ma.auto_field()
    title = ma.auto_field()
    description = ma.auto_field()
    url = ma.auto_field()
    published = ma.auto_field()