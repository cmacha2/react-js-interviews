/**
 * Section 6: Advanced State Management & Lifting State Up
 * 
 * As applications become more complex, managing state in a scalable way becomes crucial.
 * This section covers strategies for lifting state up to parent components and advanced state management techniques.
 */

// Lifting State Up
// Sometimes, several components need to reflect the same changing data. We can lift the shared state up to their closest common ancestor.

function TemperatureInput(props) {
    const handleChange = (e) => {
      props.onTemperatureChange(e.target.value);
    };
  
    return (
      <div>
        <legend>Enter temperature in {props.scale}:</legend>
        <input value={props.temperature} onChange={handleChange} />
      </div>
    );
  }
  
class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {temperature: '', scale: 'c'};
  
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
        </div>
      );
    }
  }
  
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
  // Advanced State Management
  // For complex applications, you might consider using a state management library like Redux or Context API to manage global state more effectively.
  
  // Exercise: Refactor a component hierarchy to lift state up for shared state management between sibling components.
  /**
   * Instructions:
   * 1. Identify components that share the same data.
   * 2. Find their closest common ancestor.
   * 3. Move the shared state to the common ancestor.
   * 4. Pass the state down to the components that need it through props.
   * 5. Implement callback functions to handle data changes and pass them down to the components that need to update the shared state.
   */
  
  /**
   * This section focuses on effective strategies for managing complex state in a React application, emphasizing the importance
   * of lifting state up for shared state management among components. Understanding these concepts is crucial for developing
   * large-scale applications with React.
   */
  