import './Counter.scss';

const Counter = ({ count, setCount, minValue, maxValue }) => {
  return (
    <div className='counter'>
      <button onClick={() => setCount((c) => Math.max(c - 1, minValue))}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount((c) => Math.min(c + 1, maxValue))}>
        +
      </button>
    </div>
  );
};

export default Counter;
