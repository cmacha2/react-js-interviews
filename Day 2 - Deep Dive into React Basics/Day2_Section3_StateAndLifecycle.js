/**
 * Section 3: State and Lifecycle
 * 
 * State allows React components to respond to user input, server responses, and other asynchronous events.
 * Lifecycle methods are special methods on the component class that run at particular times during a component's life.
 */

// Class component with state
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  // Using State Correctly
  // 1. Do Not Modify State Directly
  // 2. State Updates May Be Asynchronous
  // 3. State Updates are Merged
  
  // Functional component with Hooks
  function ClockWithHooks() {
    const [date, setDate] = useState(new Date());
  
    useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
  
      return () => {
        clearInterval(timerID);
      };
    }, []);
  
    function tick() {
      setDate(new Date());
    }
  
    return (
      <div>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  // Exercise: Convert a class component with state to a functional component using hooks.
  /**
   * Exercise instructions:
   * - Take any class component you've previously built or seen that uses state.
   * - Convert it into a functional component using the useState and useEffect hooks.
   * - Ensure it maintains the same functionality.
   */
  
  /**
   * This section introduced the concept of state in React and how it's used to make components dynamic and interactive.
   * Additionally, we explored lifecycle methods in class components and their counterparts, hooks, in functional components,
   * essential for managing side effects and more in your React apps.
   */
  