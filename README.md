# Nodejs Challenge


### How to install

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/chandu2004/nodejs-challenge.git ./myproject
```

### Install npm dependencies after installing

```bash
cd myproject
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
