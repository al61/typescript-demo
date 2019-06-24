// -----------------------------------------------------------------
// --------------     Example 1: Hooks Demo    ---------------------
// -----------------------------------------------------------------

import React, { useState, FC, useEffect } from 'react';
import axios from 'axios';

type ResourceListProps = { resource: string };
type Record = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

/*
interface ResourceListProps {
  resource: string;
}
interface Record {
  userId: number;
  id: number;
  title: string;
  body: string;
}
*/

const ResourceList: FC<ResourceListProps> = props => {
  const { resource } = props;

  const [resources, setResources] = useState([]);

  const fetchResource = async (resource: ResourceListProps['resource']) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  // does not deal with returning values; no types are necessary
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
