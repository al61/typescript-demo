// -----------------------------------------------------------------
// -------------     Example 2: Documentation    -------------------
// -----------------------------------------------------------------

// The component will take the name and optionally the number of 'call me' emoji
//    to trail with. We can also increment/decrement the the emoji.
// Also added an input to demo event handlers
import React, { useState, FC, Fragment, ChangeEvent } from 'react';

interface HelloProps {
  name: string; // required
  getExclamationMarks: (numChars: number) => void; // function with named prop
  enthusiasmLevel?: number; // optional and/or default props
}

// OLD syntax for typing function components React.SFC
// By typing our component as an FC, the React TypeScripts types allow us to handle children
//        and defaultProps correctly. In addition, it provides types for context, propTypes,
//        contextTypes, defaultProps, displayName
const Hello: FC<HelloProps> = props => {
  const { name, getExclamationMarks, enthusiasmLevel = 3 } = props;

  const [currentEnthusiasm, setcurrentEnthusiasm] = useState(enthusiasmLevel);
  // const [input, setInput] = useState(''); // can infer the type from the initial value
  const [input, setInput] = useState<string | undefined>(''); // string or undefined

  const updateEnthusiasm = (updateNumber: number) => {
    setcurrentEnthusiasm(updateNumber);
  };

  // Event handlers: XXXEvent<HTMLXXXElement>
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <Fragment>
      <h1>{`Hello ${name} ＠ Bluescape ${getExclamationMarks(currentEnthusiasm)}`}</h1>
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
