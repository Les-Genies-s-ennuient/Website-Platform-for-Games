
# Up postgresql database

## On windows (local run)

https://www.postgresql.org/download/windows/

## With Docker

up database: `docker-compose up`

# Connect postgresql database

connect database (once started): `psql -h localhost -p 5432 -U postgres`<br />
you can use pgAdmin 4 (install with Postgresql 12 on Windows) to connect to the db

# Init postgres database

run in postgres the `init-db.sql`script
