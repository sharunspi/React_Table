# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Using table element
Table element is available at `'src/components/ResuableTable'`

import tablelement by 
`'import ResuableTable from 'component/ResuableTable'`

# Propertice

`<ReusableTable
          tableHead = {tableHead} // array containing column heads
          tableRow = {tableBody} // array of array conatining data
        />
`
# features
1. Double click any cell to edit cell
2. Resize column heading
3. Reuse as a element