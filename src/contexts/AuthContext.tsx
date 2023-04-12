import { createContext, useReducer } from "react";

type User = { id: string; email: string; rule: number; file: any };
const initState: User = { id: "", email: "", rule: 0, file: undefined };
const ex = {
  ...initState,
  action: {
    login: (p: User) => {},
    addFile: (props: any) => {},
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
      type: "FILE";
      payload: { file: any };
    }
  | {
      type: "LOGOUT";
      payload: { email: string; rule: number };
    };
export const authReducer = (state: User, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
      };
    case "LOGOUT":
      return { ...state, email: "", rule: 0 };
    case "FILE":
      return { ...state, file: action.payload.file };
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
  const addFile = (props: any) => {
    dispatch({
      type: "FILE",
      payload: { file: props },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        action: {
          login: log,
          addFile: addFile,
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
