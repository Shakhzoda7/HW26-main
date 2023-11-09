import React from 'react';

export const Indicator = ({ description, value }) => {
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">{description}</span>
        <span className="indicator__value">{value}</span>
      </div>
      <div className="indicator__progressbar">
        <div className="indicator__unit indicator__unit-1"></div>
        <div className="indicator__unit indicator__unit-2"></div>
        <div className="indicator__unit indicator__unit-3"></div>
        <div className="indicator__unit indicator__unit-4"></div>
      </div>
    </div>
  );
};

export default Indicator;
