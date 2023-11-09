import React, { useState } from "react";
import { AnswerIconItem } from "../components/AnswerIconItem";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import { Heading } from "../components/Heading";

const StepThree = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const variants = [
    {
      id: "variant-1",
      imgSrc: "./img/laugh.png",
      label: 'Ответ№1',
    },
    {
      id: "variant-2",
      imgSrc: "./img/hearts.png",
      label: 'Ответ№2',
    },
    {
      id: "variant-3",
      imgSrc: "./img/smirk.png",
      label: 'Ответ№3',
    },
    {
      id: "variant-4",
      imgSrc: "./img/fright.png",
      label: 'Ответ№4',
    },
  ];

  /* useEffect(() => {
    console.log('Ваш ответ', checkedAnswer);
  }, [checkedAnswer]); */

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
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <AnswerIconItem
                  key={elem.id}
                  id={elem.id}
                  imgSrc={elem.imgSrc}
                  label={elem.label}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <LinkButton
              path="/step-four"
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

export default StepThree;
