/** @format */

import { createContext, useContext, useReducer } from "react";
import { reducerFunc, initialstate } from "../Reducer/quiz-reducer";

type QuizContextProviderProps = {
  children: React.ReactNode;
};

type InitialProps = {
  count: number;
  total_friends: number;
  total_suits: number;
  value: number;
  allquestion: number;
};

type ActionProps = {
  type: string;
  payload: any;
};

type QuizContextType = {
  statetotal: InitialProps;
  stateDispatch: React.Dispatch<ActionProps>;
};

const QuizContext = createContext({} as QuizContextType);

const QuizProvider = ({ children }: QuizContextProviderProps) => {
  const [statetotal, stateDispatch] = useReducer(reducerFunc, initialstate);

  return (
    <QuizContext.Provider value={{ statetotal, stateDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
const useQuiz = () => useContext(QuizContext);
export { QuizProvider, useQuiz, QuizContext };
