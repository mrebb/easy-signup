import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonsGroup = props => {
  const buttonText = props.buttonText || 'NEXT';
  return(<div className="BtnGroup">
    <Button
      label="PREVIOUS"
      onClick={props.goPrevious}
      id="previous"
      type="button"
      variant="contained"
      color="primary"
    >
      PREVIOUS
    </Button>
    <Button
      label="NEXT"
      id="next-with-previous"
      type="submit"
      variant="contained"
      color="primary"
    >
      {buttonText}
    </Button>
  </div>
  );
};

export default ButtonsGroup;
