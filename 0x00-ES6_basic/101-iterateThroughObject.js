export default function iterateThroughObject(reportWithIterator) {
  // Create an array to collect employee names
  const employees = [];

  // Iterate through the iterator and collect employee names
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the names with a pipe separator and return the result
  return employees.join(' | ');
}
