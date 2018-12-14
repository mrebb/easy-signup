import React from 'react';

const FormHeader = props=> {
  const headerText = props.headerText;
  return (
    <div className="form-header">
      <h1>{headerText}</h1>
    </div>
  );
  
};

export default FormHeader;