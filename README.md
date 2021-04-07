Who: Conor Carey
What: Github API search app
Where: Barcelona, Spin
When: Work in Progress
Why: To build an app using React and Redux

This app uses Axios to fetch data from the github API. It has a single search bar component that queries the public github api. The app then returns a list of results for the search term.
The user can click on a profile card and view some basic user information. The user can also navigate to the selected users github profile.

React router is used to navigate the the home pages, profile page, and 404 page
Redux is used as a single source of truth for all fetched data, error status, and loading status.

React-Bootstrap is used for responsive UI, and for some pre-styled components.

Planded improvments:
Store search terms in local storage
migrate more logic to the actions.js file.
improve styling

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
