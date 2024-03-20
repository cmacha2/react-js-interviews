/**
 * Section 10: React Router for Single Page Application (SPA) Navigation
 * 
 * React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
 */

// Step 1: Installation
// You need to install react-router-dom to use React Router.
// npm install react-router-dom

// Step 2: Basic Setup
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Users() {
  return <h2>Users Page</h2>;
}

// Exercise: Extend this basic setup to include a nested route within one of your components.
// Additionally, implement a redirect from an old route to a new one.

/**
 * React Router plays a critical role in building SPA with React by enabling efficient navigation between different views or components.
 * It's powerful for creating an app-like feel within a single web application, enhancing the user experience with fast, seamless transitions between different UIs.
 */

/**
 * Learning how to set up and use React Router is crucial for developing modern web applications with React.
 * Understanding its core concepts like dynamic routing, nested routes, and navigation links helps in structuring your app's navigation logic effectively.
 */
