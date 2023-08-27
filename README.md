# Enviroment

## Required

- Node.js v18.13.0
- yarn

## Recommended

- Visual Studio Code

- Recommended VS Code plugins:

  - ESLint
  - i18n Ally
  - Prettier

- Recommended Chrome plugins:
  - React Developer Tools

# Install

- Run `yarn install` in root project directory to download packages. \
- Create `vite.local.config.ts` from sample.

# Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/] to see app.

The page will reload if you make and save edits and flag is set to `reloadOnChange: true`. \
You will also see any lint errors in the console.

# Repository

## Rules

- `main` branch is for the production running version
- `develop` is a development branch
- All tasks related branches must base on the `develop` and should have name that indicates task
- Tasks related branches can be merged to the `develop` only after code review made by other developer

# CI/CD

## Builds

- On every merge request to main and develop
- On every push to main and develop

## Deployments

- From develop to GitHub Pgaes on every push to develop
- From main to production on every push to main
