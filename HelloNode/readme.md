# hello world node application with docker 

## Run without docker
* `npm install`
* `npm start`

## Run with docker
* `docker build -t <username>/hellonode .`
* `docker run -p 3000:3000 iamnoah1/hellonode`

## endpoints
* `http://localhost:3000/`