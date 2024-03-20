/**
 * Section 4: Handling Events and Conditional Rendering
 * 
 * Handling events in React is very similar to handling events on DOM elements, but there are some syntax differences.
 * Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `if` or
 * the conditional (ternary) operator to create elements representing the current state, and let React update the UI to match them.
 */

// Handling Events
class ToggleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  // Conditional Rendering
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  class Greeting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isLoggedIn: false};
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      return (
        <div>
          {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
        </div>
      );
    }
  }
  
  // Using the Logical && Operator for Inline Conditional Rendering
  function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  
  // Exercise: Implement a component that shows either a login or logout button depending on the current state.
  // Additionally, render a message that changes based on the user's authentication status.
  
  /**
   * Exercise Solution:
   * 
   * class LoginControl extends React.Component {
   *   constructor(props) {
   *     super(props);
   *     this.state = {isLoggedIn: false};
   *   }
   * 
   *   handleLoginClick = () => {
   *     this.setState({isLoggedIn: true});
   *   };
   * 
   *   handleLogoutClick = () => {
   *     this.setState({isLoggedIn: false});
   *   };
   * 
   *   render() {
   *     const isLoggedIn = this.state.isLoggedIn;
   *     let button;
   *     let message;
   * 
   *     if (isLoggedIn) {
   *       button = <button onClick={this.handleLogoutClick}>Logout</button>;
   *       message = <div>Welcome user!</div>;
   *     } else {
   *       button = <button onClick={this.handleLoginClick}>Login</button>;
   *       message = <div>Please log in.</div>;
   *     }
   * 
   *     return (
   *       <div>
   *         {button}
   *         {message}
   *       </div>
   *     );
   *   }
   * }
   */
  
  /**
   * In this section, we covered handling user interactions with event handlers and dynamically rendering content
   * based on the application state. These patterns are pivotal for creating interactive and user-friendly React applications.
   */
  