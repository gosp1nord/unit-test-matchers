export default function lifeLinesSorted(arrPersons) {
  arrPersons.sort((x, y) => y.health - x.health);
  return arrPersons;
}
