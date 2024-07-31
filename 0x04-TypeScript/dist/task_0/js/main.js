var student1 = {
    firstName: 'jon',
    lastName: 'doe',
    age: 23,
    location: 'columbia',
};
var student2 = {
    firstName: 'foo',
    lastName: 'bar',
    age: 20,
    location: 'san fransico',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
var head = table.createTHead();
var row = head.insertRow();
var th1 = row.insertCell(0);
var th2 = row.insertCell(1);
th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Location</b>");
var body = table.createTBody();
studentsList.map(function (student) {
    var newRow = body.insertRow();
    var firstNameRow = newRow.insertCell();
    var locationRow = newRow.insertCell();
    firstNameRow.innerHTML = student.firstName;
    locationRow.innerHTML = student.location;
});
//# sourceMappingURL=main.js.map