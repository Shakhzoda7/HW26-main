import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Heading } from "../components/Heading";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";

const StepFour = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      id: "variant-1",
      answerLabel: '1',
    },
    {
      id: "variant-2",
      answerLabel: '2',
    },
    {
      id: "variant-3",
      answerLabel: '3',
    },
    {
      id: "variant-4",
      answerLabel: '4',
    },
    {
      id: "variant-5",
      answerLabel: '5',
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Heading
              text="1. Занимательный вопрос"
              headingType="h2"
            />
            <ul className="level-variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  answerLabel={elem.answerLabel}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <LinkButton
              path="/thanks"
              isDisabled={!checkedAnswer}
              buttonType="button"
              buttonText="Далее"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
