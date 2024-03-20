/**
 * Section 1: JSX and Elements
 *
 * JSX is a syntax extension for JavaScript. It looks like HTML but allows you to create React elements
 * in a more readable and expressive way. Elements are the smallest building blocks of React apps.
 */

// JSX example
const element = <h1>Hello, world!</h1>;

// Embedding expressions in JSX
const name = 'React Developer';
const greeting = <h1>Hello, {name}</h1>;

// JSX is an expression too
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// Attributes in JSX
const elementWithAttributes = <div tabIndex="0">Focusable Div</div>;

// Specifying children with JSX
const container = (
  <div>
    <h1>Header</h1>
    <p>Paragraph of text.</p>
  </div>
);

// Exercise: Create a simple JSX element that represents a user profile card containing user's name and bio.

/**
 * Exercise Solution:
 * 
 * const userProfile = (
 *   <div className="user-profile">
 *     <h2>John Doe</h2>
 *     <p>Software Developer at React Inc.</p>
 *   </div>
 * );
 * 
 * Note: This is a basic introduction to JSX. As you get more comfortable, you'll start to see how JSX makes
 * developing complex applications with React more intuitive.
 */
