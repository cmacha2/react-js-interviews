/**
 * Section 8: Advanced Hooks - useEffect, useReducer, and Custom Hooks
 * 
 * useEffect allows you to perform side effects in function components.
 * useReducer is an alternative to useState, perfect for state logic that involves multiple sub-values or when the next state depends on the previous one.
 * Custom Hooks let you extract component logic into reusable functions.
 */

// Using useEffect for side effects
function Timer() {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
  
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []); // Empty array means this effect runs only once after the initial render
  
    return <div>Timer: {seconds} Seconds</div>;
  }
  
  // Using useReducer for complex state logic
  function counterReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }
  
  function Counter() {
    const [state, dispatch] = useReducer(counterReducer, {count: 0});
  
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </>
    );
  }
  
  // Creating a custom hook
  function useCounter(initialCount = 0) {
    const [count, setCount] = useState(initialCount);
  
    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);
    const reset = () => setCount(initialCount);
  
    return {count, increment, decrement, reset};
  }
  
  function CustomHookExample() {
    const {count, increment, decrement, reset} = useCounter();
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  
  // Exercise: Implement a custom hook called `useFetch` that encapsulates fetching data from an API.
  /**
   * Exercise Solution:
   * 
   * function useFetch(url) {
   *   const [data, setData] = useState(null);
   *   const [loading, setLoading] = useState(true);
   *   const [error, setError] = useState(null);
   * 
   *   useEffect(() => {
   *     const fetchData = async () => {
   *       try {
   *         const response = await fetch(url);
   *         const data = await response.json();
   *         setData(data);
   *         setLoading(false);
   *       } catch (error) {
   *         setError(error);
   *         setLoading(false);
   *       }
   *     };
   * 
   *     fetchData();
   *   }, [url]);
   * 
   *   return { data, loading, error };
   * }
   * 
   * This section dives deep into more advanced hooks, broadening your toolset for managing state and effects in React applications.
   * Understanding these hooks allows for more optimized and maintainable components, particularly in complex applications.
   */
  