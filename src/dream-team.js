import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  // If members is not array return FALSE.
  if( Array.isArray(members) === false ) { return false }
  let dreamTeamName = [];
  // Filter by string member values.
  const filteredMembers = members.filter(elem => typeof elem === "string");
  
  filteredMembers.forEach(elem => dreamTeamName.push(elem.trim()[0].toUpperCase()))
  dreamTeamName.sort();
  
  return dreamTeamName.join("");
}
