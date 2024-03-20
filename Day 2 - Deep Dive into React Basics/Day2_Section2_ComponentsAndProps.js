/**
 * Section 2: Components and Props
 *
 * Components let you split the UI into independent, reusable pieces. Props are how you pass data to components.
 */

// Functional component
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  // Class component
  class WelcomeClass extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  
  // Rendering a component
  const element = <Welcome name="React" />;
  ReactDOM.render(element, document.getElementById('root'));
  
  // Composing components
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  
  // Exercise: Create a component `UserProfile` that accepts `name` and `bio` as props and renders them in a nice layout.
  
  /**
   * Exercise Solution:
   * 
   * function UserProfile({ name, bio }) {
   *   return (
   *     <div className="user-profile">
   *       <h2>{name}</h2>
   *       <p>{bio}</p>
   *     </div>
   *   );
   * }
   * 
   * This exercise helps you get hands-on experience with defining and rendering components, and passing data through props.
   */
  

  const UserProfile = (props) => { // here you can use destructuring and it is when you pass to the function the values in this way {name, bio}
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.bio}</p>
        </div>
    )
  }