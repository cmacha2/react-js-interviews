/**
 * Section 7: Using Context for Global State Management
 * 
 * Context provides a way to pass data through the component tree without having to pass props down manually at every level.
 * In React, global state management can be achieved using Context, making it easier to share state across the entire app.
 */

// Step 1: Create a Context
const ThemeContext = React.createContext('light'); // Default value

// Step 2: Provide a Context Value
// Wrap your component tree with the Context Provider and pass it the desired value.
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// Step 3: Consume the Context Value
// Use the Context Consumer or the useContext Hook to access the context value in any component.
function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {theme => <button className={theme}>I am styled by theme context!</button>}
    </ThemeContext.Consumer>
  );
}

// Or using the useContext Hook in functional components
function ThemedButtonWithHook() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>I am styled by theme context!</button>;
}

// Toolbar component that uses ThemedButton
function Toolbar(props) {
  return (
    <div>
      <ThemedButtonWithHook />
    </div>
  );
}

// Exercise: Implement a "User" context that stores user information (e.g., name) and displays it in a NavBar and Footer component.

/**
 * Exercise Solution:
 * 
 * // UserContext.js
 * export const UserContext = React.createContext({name: 'Guest'});
 * 
 * // App.js
 * import { UserContext } from './UserContext';
 * 
 * function App() {
 *   return (
 *     <UserContext.Provider value={{name: 'React Developer'}}>
 *       <NavBar />
 *       <Footer />
 *     </UserContext.Provider>
 *   );
 * }
 * 
 * // NavBar.js
 * function NavBar() {
 *   const { name } = React.useContext(UserContext);
 *   return <div>Welcome, {name}!</div>;
 * }
 * 
 * // Footer.js
 * function Footer() {
 *   const { name } = React.useContext(UserContext);
 *   return <div>Goodbye, {name}!</div>;
 * }
 */

/**
 * This section introduces the concept of Context in React, which is invaluable for managing global state in a more efficient and scalable way.
 * By understanding and applying Context, you can greatly simplify state management in large applications, avoiding prop drilling and making state accessible across your component tree.
 */
