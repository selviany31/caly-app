import { createContext, useContext, useReducer } from 'react';

const Context = createContext();

const initialState = {
  tokped: {},
  data: {},
  tiktok: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOKPED':
      return {
        ...state,
        tokped: action.payload,
      };
    case 'ADD_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'ADD_TIKTOK':
      return {
        ...state,
        tiktok: action.payload,
      };
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useCalyContext = () => useContext(Context);
