export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList
    },
    getNumberOfDepartments() {
      // The number of departments is the length of the keys of the employeesList object
      return Object.keys(employeesList).length;
    }
  };
}
