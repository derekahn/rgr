import { EventEmitter } from 'events';

import flux from './disptacher';
import type from './constants';

class Store extends EventEmitter {
  constructor(props) {
    super(props);

    this.links = [];

    flux.register(action => {
      switch (action.type) {
        case type.RECIEVE_LINKS: {
          this.links = action.links;
          this.emit('change');

          break;
        }
        default:
        // do nothing
      }
    });
  }

  getAll() {
    return this.links;
  }
}

export default new Store();
