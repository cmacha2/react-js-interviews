/**
 * Section 9: Optimizing React Applications
 * 
 * Performance optimization is key for maintaining smooth and responsive applications.
 * React provides several tools and techniques for optimizing your applications.
 */

// React.memo for Preventing Unnecessary Rerenders
// React.memo is a higher order component that memoizes your component so that it only rerenders when its props change.
const MyComponent = React.memo(function MyComponent(props) {
    /* render using props */
  });
  
  // useMemo for Memoizing Expensive Calculations
  // The useMemo Hook allows you to memoize expensive calculations so they are not recalculated on every render.
  function MyExpensiveComponent({ compute, value }) {
    const computedValue = useMemo(() => compute(value), [compute, value]);
    return <div>{computedValue}</div>;
  }
  
  // useCallback for Memoizing Callbacks
  // The useCallback Hook returns a memoized version of the callback that only changes if one of the dependencies has changed.
  function MyButton({ onClick, children }) {
    const memoizedOnClick = useCallback(() => {
      onClick();
    }, [onClick]);
    return <button onClick={memoizedOnClick}>{children}</button>;
  }
  
  // Code-Splitting in React
  // Splitting your code into smaller chunks can significantly improve your app's load time. React supports code-splitting out of the box with dynamic `import()` syntax.
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  
  function MyComponent() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </React.Suspense>
    );
  }
  
  // Exercise: Optimize a React application by implementing React.memo, useMemo, and useCallback.
  // Additionally, identify components that could benefit from code-splitting and implement lazy loading.
  /**
   * Exercise instructions:
   * 1. Find components that are being rerendered without changes to their props and wrap them with React.memo.
   * 2. Identify expensive calculations in your components and memoize them using useMemo.
   * 3. Memoize callbacks passed to child components that do not frequently change using useCallback.
   * 4. Use React.lazy and <React.Suspense> to implement code-splitting for a component that is not immediately needed on page load.
   */
  
  /**
   * This section highlights the importance of optimizing React applications for better performance.
   * By strategically applying React.memo, useMemo, useCallback, and code-splitting, you can ensure that your application runs efficiently, even as it scales.
   */
  