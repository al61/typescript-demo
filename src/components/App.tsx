import React, { useState } from 'react';
// import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <h2>Typescript & React Hooks</h2>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {/* <ResourceList resource={resource} /> */}
      <h3>{resource}</h3>
    </div>
  );
};

export default App;
