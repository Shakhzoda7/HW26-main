import React from "react";

export const AnswerIconItem = ({
  id, imgSrc, label, isChecked, onChange,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        onChange={onChange}
        checked={isChecked}
        required
        type="radio"
        name="question"
        id={id}
      />
      <label htmlFor={id}>
        <img src={imgSrc} alt={label} />
        <p>{label}</p>
      </label>
    </li>
  );
};
