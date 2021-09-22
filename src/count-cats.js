import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(cats) {
   let catsCount = 0;
  
  cats.forEach(element => { 
    const cats = element.filter(item => item === '^^');
    catsCount = catsCount + cats.length;
  });

  return catsCount;
}
