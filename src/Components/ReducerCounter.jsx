
import { useReducer } from "react";

export default function Demo() {
  const initialCount = { count: 0, text: "" };

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count === 5 ? state.count : state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count > 0 ? state.count - 1 : state.count,
        };
      case "changeText":
        return (state = { ...state, text: action.payload });
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialCount);

  // useEffect(() => {
  //   console.log(Updated Count: ${state});
  // }, [state]);

  return (
    <div className="tutorial mt-3">
      <h1 className="mb-3">Count: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="btn btn-outline btn-ghost mr-5"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-outline btn-ghost"
      >
        Increment
      </button>

      <input
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "changeText", payload: e.target.value })
        }
        placeholder="enter text"
        className="text-black m-4 border border-red-200"
      />
      <p>{state.text}</p>
      {state.count === 5 ? (
        <p className="text-red-500 border-[1px] border-red-500 rounded-lg px-6 py-2 max-w-[400px] mt-3">
          Limit exceeded
        </p>
      ) : (
        ""
      )}
    </div>
  );
}