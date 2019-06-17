// The component will take the name and optionally the number of 'call me' emoji
//    to trail with. We can also increment/decrement the the emoji.
// Also added an input to demo event handlers
import React, { useState, Fragment } from 'react';

type HelloProps = {
  name: string; // required
  getExclamationMarks: (numChars: number) => void; // function with named prop
  enthusiasmLevel?: number; // optional
  company: string; // default prop
};

const Hello = (props: HelloProps) => {
  const { name, getExclamationMarks, enthusiasmLevel = 3, company } = props; // destructure props

  const [currentEnthusiasm, setcurrentEnthusiasm] = useState(enthusiasmLevel);
  const [input, setInput] = useState('');

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
      <hr />
      <div>
        <input type="text" value={input} onChange={handleInput} />
        {input}
      </div>
    </Fragment>
  );
};

export default Hello;

Hello.defaultProps = {
  company: 'Bluescape',
};
