// -----------------------------------------------------------------
// --------------     Example 1: Hooks Demo    ---------------------
// -----------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';

type ResourceListProps = { resource: string };
type Record = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ResourceList = ({ resource }: ResourceListProps) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource: ResourceListProps['resource']) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map((record: Record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
