-- Feeds Table Definition ----------------------------------------------

CREATE TABLE feeds (
    id SERIAL PRIMARY KEY,
    url character varying UNIQUE,
    title character varying,
    language character varying,
    description character varying,
    created timestamp without time zone DEFAULT now(),
    last_updated timestamp without time zone
);

-- Entries Table Definition ----------------------------------------------

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    title character varying,
    url character varying UNIQUE,
    description character varying,
    published timestamp without time zone,
    feed_id integer REFERENCES feeds(id)
);
