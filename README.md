# WaiterApp (API)

API of the WaiterApp, an app made to help waiters to manage orders.

## Technologies

These are some of the tecnologies used in this project:

- `commitlint`: A tool that checks your commits and ensures consistency in version control.
- `dotenv`: A module that loads a `.env` file into `process.env`.
- `eslint`: A linting tool for JavaScript/TypeScript code.
- `express`: A Node.js minimalist framework.
- `husky`: A tool for adding Git hooks to automate tasks like linting, testing, or commits in JavaScript/Node.js projects.
- `lint-staged`: Runs linters on Git staged files.
- `mongoose`: A Node.js ODM for MongoDB that simplifies data modeling and queries.
- `multer`: A middleware for handling multipart/form-data, which is primarily used for uploading files.
- `pino`: A very low overhead Node.js logger.
- `prettier`: A code formatter.
- `tsx`: A command-line tool and Node.js enhancement that allows you to execute TypeScript files directly without needing to explicitly compile them to JavaScript first.

_For more information about other dependencies, see the `package.json` file._

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thiagocrux/waiterapp-api.git
```

2. Browse to the project folder:

```bash
cd waiterapp-api
```

3. Install dependencies:

```
pnpm install
```

4. Create a `.env` file on the project's root and set the environment variables following the instructions on the comments:

```
# Config an API key on https://www.https://api.imgbb.com/ and set it below.
IMGBB_API_KEY=
```

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode using `nuxt dev`, enabling faster builds and live-reloading.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Compiles the application for production.

  ```bash
  pnpm build
  ```

- #### `start`

  Start the server for production from the compiled files.

  ```bash
  pnpm start
  ```

## Useful links

- [JStack](https://app.jstack.com.br/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
