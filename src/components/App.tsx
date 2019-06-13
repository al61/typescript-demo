// -----------------------------------------------------------------
// --------------     Example 1: Hooks Demo    ---------------------
// -----------------------------------------------------------------

/*
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
*/

// -----------------------------------------------------------------
// -------------     Example 2: Documentation    -------------------
// -----------------------------------------------------------------
import React from 'react';
import Hello from './Hello';

const App = () => {
  return (
    <div>
      <h2>TypeScript Documentation Demo</h2>
      <Hello name="Portal Client Team" enthusiasmLevel={3} />
    </div>
  );
};

export default App;
