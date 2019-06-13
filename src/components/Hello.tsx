// The component will take the name and optionally the number of 'call me' emoji
//    to trail with. We can also increment/decrement the the emoji
import React, { useState, Fragment } from 'react';

type HelloProps = {
  name: string; // required
  enthusiasmLevel?: number; // optional
  company: string; // default prop
};

const Hello = (props: HelloProps) => {
  const { name, enthusiasmLevel = 1, company } = props; // destructure props

  const [currentEnthusiasm, setcurrentEnthusiasm] = useState(enthusiasmLevel);
  const [input, setInput] = useState('');

  const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('🤙');
  };

  const updateEnthusiasm = (updateNumber: number) => {
    setcurrentEnthusiasm(updateNumber);
  };

  // event handlers
  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  return (
    <Fragment>
      <h1>{`Hello ${name} ＠ ${company} ${getExclamationMarks(currentEnthusiasm)}`}</h1>
      <button onClick={() => updateEnthusiasm(currentEnthusiasm + 1)}>+</button>
      <button onClick={() => updateEnthusiasm(currentEnthusiasm - 1)}>-</button>
      <input type="text" value={input} onChange={handleInput} />
    </Fragment>
  );
};

export default Hello;

Hello.defaultProps = {
  company: 'Bluescape',
};
