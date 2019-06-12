// The component will take the name and optionally the number of 'call me' emoji
//    to trail with. We can also increment/decrement the the emoji
import React, { useState, Fragment } from 'react';

type HelloProps = {
  name: string; // required
  enthusiasmLevel?: number; // optional
};

const Hello = ({ name, enthusiasmLevel = 1 }: HelloProps) => {
  const [currentEnthusiasm, setcurrentEnthusiasm] = useState(enthusiasmLevel);

  const handleIncrement = () => updateEnthusiasm(currentEnthusiasm + 1);
  const handleDecrement = () => updateEnthusiasm(currentEnthusiasm - 1);

  const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('🤙');
  };

  const updateEnthusiasm = (updateNumber: number) => {
    setcurrentEnthusiasm(updateNumber);
  };

  return (
    <Fragment>
      <h1>{`Hello ${name} ${getExclamationMarks(currentEnthusiasm)}`}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </Fragment>
  );
};

export default Hello;
