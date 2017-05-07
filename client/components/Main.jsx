import React, { Component } from 'react';
import {get} from 'axios';

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
    get('/data/links').then(({data}) => {
      action.receiveLinks(data);
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
