export default function getListStudentIds(arrarg) {
  if (Array.isArray(arrarg)) {
    const idarr = arrarg.map((obj) => obj.id);
    return idarr;
  }
  return [];
}
