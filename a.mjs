/**
 * Demo ESM/CJS interoperability in Node a environment
 * 
 * Readings:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * - https://nodejs.org/api/esm.html#commonjs-namespaces
 */

// default import
import {default as uno} from './b.cjs';

// default import (syntactic sugar for the first form)
import dos from './b.cjs';

// namespace import (a.k.a. Module Namespace Exotic Object)
import * as tres from './b.cjs';

// dynamic import (also return the Module Namespace Exotic Object)
const quatre = await import('./b.cjs');


console.log(uno);
// OUTPUT: { aap: 'lol' }
console.log(dos);
// OUTPUT: { aap: 'lol' }
console.log(tres);
// OUTPUT: [Module: null prototype] { aap: 'lol', default: { aap: 'lol' } }
console.log(quatre);
// OUTPUT: [Module: null prototype] { aap: 'lol', default: { aap: 'lol' } }
