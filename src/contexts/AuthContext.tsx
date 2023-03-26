import { createContext, useReducer } from "react";

type User = { email: string; rule: number };
const initState: User = { email: "", rule: 0 };
const ex = {
  ...initState,
  action: {
    login: (p: User) => {},
  },
};

interface IProps {
  children: any;
}

export const AuthContext = createContext(ex);
type Action =
  | {
      type: "LOGIN";
      payload: { email: string; rule: number };
    }
  | {
      type: "LOGOUT";
      payload: { email: string; rule: number };
    };
export const authReducer = (state: User, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return { email: action.payload.email, rule: action.payload.rule };
    case "LOGOUT":
      return { email: "", rule: 0 };
    default:
      return state;
  }
};
export const AuthContextProvider = (props: IProps) => {
  const [state, dispatch] = useReducer(authReducer, initState);
  const log = (props: User) => {
    dispatch({
      type: "LOGIN",
      payload: { email: props.email, rule: props.rule },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        action: {
          login: log,
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
