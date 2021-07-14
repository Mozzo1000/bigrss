# BigRSS backend

## Development database
This repository contains a docker-compose file for a development postgres server including pgAdmin managment interface. It is not intended to be used in production.

### Environment variables
The file `docker-database.env` contains environment variables used by the docker containers. It is setup to be used without any further modification but can be changed if neccessary.

### Initialization
First time the containers are ran the postgres database will automatically create the tables neccesarry defined in the file [database/initial_db.sql](https://github.com/Mozzo1000/bigrss/blob/master/backend/database/initial_db.sql). At the moment it does not seed any content just creates the tables.

### Usage
#### Start containers
* `docker-compose up`
#### Stop containers
* `docker-compose down`
#### Remove database volume
* `docker volume rm backend_database-data`

#### pgAdmin Web GUI
* Open http://localhost:16543/ in your browser.

**Adding the database server:** use `db` as Host name/address. Username and password is the same as defined in `docker-database.env`.