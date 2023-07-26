# Admin-Todos App

## Development

Steps to launch the application in development environment

1. Copy .env.sample file located in the project root as .env file.

2. Sets the following variables into .env file

```
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_DATABASE
API_URL
```

_In the case of the API_URL environment variable, I must point out that the API used is the one created in this same project in the **"src/app/api"** directory._

<sup>Note: If you want to use an external api you can do so by setting this environment variable (if you make this change, it is outside the scope of this repository)</sup>

3. Raise the database

```
docker compose up -d
```

4. Execute the command `npm install` for install node modules

5. Execute the command `npm run dev` for run the app in development mode

6. Execute following prisma commands:

```
npx prisma migrate dev
npx prisma generate
```

7. Execute the seed for [create the local database](http://localhost:3000/api/seed)

## Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

## Local REST API endpoints

| Endpoint                                                                         | Method | Description                                                                          |
| -------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------ |
| [http://localhost:3000/api/seed](http://localhost:3000/api/seed)                 | GET    | Calling this API REST endpoint will create records in the Todo table in the database |
| [http://localhost:3000/api/todos](http://localhost:3000/api/todos)               | GET    | Return an entire of Todo's list                                                      |
| [http://localhost:3000/api/todos/[todoId]](http://localhost:3000/api/todos/[id]) | GET    | Return a single todo by todoId                                                       |
| [http://localhost:3000/api/todos](http://localhost:3000/api/todos)               | POST   | Create a single todo                                                                 |
| [http://localhost:3000/api/todos/[todoId]](http://localhost:3000/api/todos/[id]) | PUT    | Modify a single todo by todoId                                                       |
