# Node Mongo API example application

## Run without docker
* Start a mongodb instance on localhost and default port (`docker run -d -p 27017:27017 mongo`)
* `[Environment]::SetEnvironmentVariable("MONGO_URL", "mongodb://localhost:27017/todos", "Machine")` on Windows
* `export MONGO_URL=mongodb://localhost:27017/todos` on Linux
* `npm install`
* `npm start`

## endpoints
* Get todos `http://localhost:3000/todos`
* Post new todo entry `http://localhost:3000/todos` with following json body: `{ "title": "new todo entry"}`

## Run with Docker 
* TODO: Create a Docker file and run the app with docker. 
