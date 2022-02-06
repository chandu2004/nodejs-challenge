# Coding Challenge

REST API to fetch and filter the data from MongoDB based on request parameters

## Live URL (Deployed to Heroku):

```bash
Home URL: https://agile-bayou-42532.herokuapp.com/
API Endpoint: https://agile-bayou-42532.herokuapp.com/api/records
```

## How to Test the API

Sample Request Body:
```bash
{ "startDate": "2016-01-26", "endDate": "2018-02-02", "minCount": 2700, "maxCount": 3000 }
```
Invoke API using CURL (POST Request):
```bash
curl --header "Content-Type: application/json" -d "{\"startDate\":\"2016-01-26\", \"endDate\":\"2018-02-02\", \"minCount\": 2700, \"maxCount\": 3000}" https://agile-bayou-42532.herokuapp.com/api/records
```

### Code Coverage
![alt text](https://github.com/chandu2004/nodejs-challenge/blob/master/public/code_coverage.png?raw=true)


## Local setup

### How to install

1.  Clone the project from github

```bash
git clone https://github.com/chandu2004/nodejs-challenge.git
```

### Install npm dependencies after installing

```bash
cd nodejs-challenge
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  Change the value of the property MONGODB_URL in env file.

## How to run

### Running API server locally

```bash
npm run dev
```

This will launch the server on http://localhost:3000

```bash
URL: http://localhost:3000
Endpoint: http://localhost:3000/api/records
```

## Tests

### Running Tests

```bash
npm test
```

## ESLint

### Running Eslint

```bash
npm run lint
```
