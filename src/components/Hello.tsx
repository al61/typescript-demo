// The component will take the name and optionally the number of 'call me' emoji
//    to trail with. We can also increment/decrement the the emoji.
// Also added an input to demo event handlers
import React, { useState, FC, Fragment, FormEvent } from 'react';

interface HelloProps {
  name: string; // required
  getExclamationMarks: (numChars: number) => void; // function with named prop
  enthusiasmLevel?: number; // optional and/or default props
}

// OLD syntax for typing function components React.SFC
// By typing our component as an FC, the React TypeScripts types allow us to handle children
//        and defaultProps correctly.In addition, it provides types for context, propTypes,
//        contextTypes, defaultProps, displayName
const Hello: FC<HelloProps> = props => {
  const { name, getExclamationMarks, enthusiasmLevel = 3 } = props; // destructure props

  const [currentEnthusiasm, setcurrentEnthusiasm] = useState(enthusiasmLevel);
  const [input, setInput] = useState(''); // With simple functions, useState can infer the type from the initial value
  // const [input, setInput] = useState<string | undefined>(''); // string or undefined

  const updateEnthusiasm = (updateNumber: number) => {
    setcurrentEnthusiasm(updateNumber);
  };

  // Event handlers: XXXEvent<HTMLXXXElement>
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
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

/*
// The React team is discussing deprecating defaultProps on function components. (after the introduction of Hooks)
// defaultProps is very useful on classes because the props object gets passed to many different 
        methods. Life-cycles, callbacks etc. Each one in its own scope. This makes it hard to use 
        JS default arguments because you'd have to replicate the same defaults in each function.
        https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md#deprecate-defaultprops-on-function-components

Hello.defaultProps = {
  enthusiasmLevel: '3',
};
*/
