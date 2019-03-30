// BEAD PRACTICE TO USE "HELPERS" NAME - why ???
import { uniqueId } from 'lodash';

export function createHeader(name) {
  const h1 = document.createElement('h1');
  h1.innerHTML = uniqueId(name);
  return h1;
}
