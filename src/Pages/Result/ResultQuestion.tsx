/** @format */

import * as React from "react";

export interface IAppProps {
  question: string;
  answer: string;
}

export const ResultQuestion = ({ question, answer }: IAppProps) => {
  return (
    <div>
      {" "}
      <h1 className='question-phrase'>{question}</h1>
      <div className='question-buttons'>
        <button className='question-phrase-button'>{answer}</button>
      </div>
    </div>
  );
};
