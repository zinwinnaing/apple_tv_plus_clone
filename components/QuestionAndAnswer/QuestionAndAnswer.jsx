import classNames from "classnames";
import React, { useState } from "react";
import { QuestionAndAnswerData } from "../../data/data";
import Header from "../Header/Header";
import ToggleList from "./components/ToggleList";
import styles from "./QuestionAndAnswer.module.scss";
const QuestionAndAnswer = () => {
  return (
    <div>
      <div className="text-center">
        <Header>Questions? Answers.</Header>
      </div>
      <ul>
        {QuestionAndAnswerData.map((d) => {
          return <ToggleList key={d?.id} data={d} />;
        })}
      </ul>
    </div>
  );
};

export default QuestionAndAnswer;
