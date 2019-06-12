import React, { Component } from 'react';
import axios from 'axios';

export class ResourceList extends Component {
  state = {
    resources: [],
  };

  // async componentDidMount() {
  //   console.log('I am in here!');
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
  //   this.setState({ resources: response.data });
  // }

  // // called anytime our component gets updated, i.e, renders because of a parent component or anytime we call setState inside this component
  // async componentDidUpdate(prevProps: any) {
  //   if (prevProps.resource !== this.props.resource) {
  //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
  //     this.setState({ resources: response.data });
  //   }
  // }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
