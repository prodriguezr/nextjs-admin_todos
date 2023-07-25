# Admin-Todos App

## Development

Steps to launch the application in development environment

1. Create the environment file

Copy .env.sample file located in the project root as .env file.
Sets the following variables into .env file

```
DB_USER
DB_PASSWORD
```

2. Raise the database

```
docker compose up -d
```
