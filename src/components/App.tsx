// -----------------------------------------------------------------
// --------------     Example 1: Hooks Demo    ---------------------
// -----------------------------------------------------------------

import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <h2>Add TypeScript to our React Hooks Demo</h2>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
      <h3>{resource}</h3>
    </div>
  );
};

export default App;

// -----------------------------------------------------------------
// -------------     Example 2: Documentation    -------------------
// -----------------------------------------------------------------

/*
import React from 'react';
import Hello from './Hello';

const App = () => {
  const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('🤙');
  };

  return (
    <div>
      <h2>TypeScript Documentation Demo</h2>
      <Hello name="Portal Client Team" getExclamationMarks={getExclamationMarks} />
    </div>
  );
};

export default App;
*/

// -----------------------------------------------------------------
// -----------     TypeScript links & resources    -----------------
// -----------------------------------------------------------------
/*
React & Redux TypeScript Guide: https://github.com/piotrwitek/react-redux-typescript-guide#function-components---fc
TypeScript, redux, and testing Starter: https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
React+TypeScript Cheatsheets: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
TypeScript Cheatsheet: https://devhints.io/typescript
React Hooks in TypeScript: https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d
TypeScript and React Hooks: https://fettblog.eu/typescript-react/hooks/#usestate
*/
