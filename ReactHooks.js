// useState
// Purpose: Manages state in functional components.
const [count, setCount] = useState(0);

// useEffect
// Purpose: Handles side effects like data fetching, subscriptions, or manually changing the DOM.
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);


// useContext
// Purpose: Provides an easy way to access context values without having to pass props down manually.
const value = useContext(MyContext);

// useReducer
// Purpose: Manages complex state logic, similar to how you would use reducers in Redux.

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);


// useRef
// Purpose: Maintains a mutable reference that persists across renders without causing re - renders.
const refContainer = useRef(initialValue);

const inputEl = useRef(null);
const onButtonClick = () => {
  inputEl.current.focus();
};


// useMemo
// Purpose: Optimizes performance by memoizing expensive calculations.
const memoizedResult = useMemo(() => heavyComputation(value), [value]);


// useCallback
// Purpose: Memoizes callback functions to prevent unnecessary re - creations on every render.
const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);