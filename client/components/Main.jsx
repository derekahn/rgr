import React, { Component } from 'react';
import {post} from 'axios';

import action from 'store/actions';
import store from 'store';


const getState = () => ({ links: store.getAll() });

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = getState();

    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    const request = {
      query: `{
        links {
          _id,
          title,
          url
        }
      }`
    };

    post('/graphql', request).then(({data: { data: {links} }}) => {
      action.receiveLinks(links);
    });

    store.on('change', this.onChange)
  }
  onChange() {
    this.setState(getState());
  }
  componentWillUnmount() {
    store.removeListener('change', this.onChange);
  }
  render() {
    return (
      <div>
        <h3>Links</h3>
        <ul>
          {this.state.links.map(link =>
            <li key={link._id}>
              <a href={link.url}>{link.title}</a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
