# Node Mongo API example application

## Run without docker
* Start a mongodb instance on localhost and default port (`docker run -d -p 27017:27017 mongo`)
* `[Environment]::SetEnvironmentVariable("MONGO_URL", "mongodb://localhost:27017/todos", "Machine")`
* `npm install`
* `npm start`

## Run with docker
* `docker run -d -p 27017:27017 mongo`
* `docker build -t <username>/nodemongoapi .`
* `docker run -p 3000:3000 iamnoah1/nodemongoapi`

## Run with docker compose
* TODO: create a docker-compose file which runs both, mongodb and the api 

## endpoints
* Get todos `http://localhost:3000/todos`
* Post new todo entry `http://localhost:3000/todos` with following json body: `{ "title": "new todo entry"}`