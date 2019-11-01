# Star Wars Universe

This app will let you discover the details of each character of the Star Wars movies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Notes

I was not able to get an API Key from the [Marvel's developer portal](https://developer.marvel.com/), the page kept loading forever so I decided to use the star wars API. I doesn't provide an API key, if it did I would build a proxy server to secure that key because it's not a good practice to store API secrets in client applications, otherwise anyone could stole it.

The Star Wars API host is provided via environment variable REACT_APP_STAR_WARS_API_HOST which default value is https://swapi.co
