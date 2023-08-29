# PoliWebsite

## Environment

### Required

- Node.js v18.13.0
- yarn

### Formatting

- Prettier
- ESLint

## Install

Run `yarn install` in root project directory to download packages.

## Scripts

Available scripts:

#### `yarn dev`

Runs the app in the development mode on http://localhost:5173/.

- The page will reload on code edits.
- Linter errors will be printed in the console.

#### `yarn dev-host`

Same as `yarn dev`, but runs on the local network.

#### `yarn build`

Builds the app for production in the `dist` folder.

#### `npx serve -s dist`

Runs the app in the production mode on http://localhost:3000/.

## Repository

### Rules

- `main` branch is for the production running version,
- `develop` is a development branch,
- All tasks related branches must base on the `develop` and should have a name that indicates the task.
- Tasks related branches can be merged to the `develop` only after code review is made by another developer.

## CI/CD

### Builds

- On every merge request to `main` and `develop`.
- On every push to `main` and `develop`.

### Deployments

- From `develop` to GitHub Pages on every push to `develop`.
- From `main` to `production` on every push to `main`.
