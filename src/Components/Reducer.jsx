import { useReducer } from "react";

const initialState = {
    username: '',
    email: '',
    password: ''
  };
  
  function formReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value
        };
      default:
        return state;
    }
  }
  
  function FormComponent() {
    const [state, dispatch] = useReducer(formReducer, initialState);
  
    const handleChange = (e) => {
      dispatch({
        type: 'UPDATE_FIELD',
        field: e.target.name,
        value: e.target.value
      });
    };
  
    return (
      <form>
        <input name="username" value={state.username} onChange={handleChange} />
        <input name="email" value={state.email} onChange={handleChange} />
        <input name="password" value={state.password} onChange={handleChange} />
      </form>
    );
  }