import flux from './disptacher';
import type from './constants';

export default {
  receiveLinks(links) {
    flux.dispatch({
      type: type.RECIEVE_LINKS,
      links,
    });
  },
};
