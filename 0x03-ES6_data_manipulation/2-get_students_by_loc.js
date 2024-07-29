export default function getStudentsByLocation(arrarg, city) {
  const filterarr = arrarg.filter((ind) => ind.location === city);
  return filterarr;
}
