export default function getListStudents(arrarg) {
    if (Array.isArray(arrarg)) {     
      const idarr = arrarg.map(obj => obj.id);
      return idarr;
    } else {
      return [];
    }
  }