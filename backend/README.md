# BigRSS backend

## Docker containers
This repository contains a docker-compose file for a development postgres server including pgAdmin managment interface and BigRSS API . It is not intended to be used in production.

### Environment variables
The file `docker-database.env` contains environment variables used by the docker containers. It is setup to be used without any further modification but can be changed if neccessary.

### Initialization
First time the containers are ran the postgres database will automatically create the tables neccesarry defined in the file [database/initial_db.sql](https://github.com/Mozzo1000/bigrss/blob/master/backend/database/initial_db.sql). At the moment it does not seed any content just creates the tables.

## API
The container for the API is built from the dockerfile defined in the `api` folder. The API can be accessed from http://localhost:5000.
When doing development on the API I recommend running `api/api.py` directly with Python instead of in the docker container. The API is included as a container to make frontend development easier. 
You can run `docker-compose up db pgadmin` to only start the database and database management tool.

### Usage
#### Start containers
* `docker-compose up`
#### Stop containers
* `docker-compose down`
#### Remove database volume
* `docker volume rm backend_database-data`
#### Build containers (for API container)
* `docker-compose build`

#### pgAdmin Web GUI
* Open http://localhost:16543/ in your browser.

**Adding the database server:** use `db` as Host name/address. Username and password is the same as defined in `docker-database.env`.


