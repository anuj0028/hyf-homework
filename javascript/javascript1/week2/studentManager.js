const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName=== "" ){
        console.log("You cannot add an empty string to a class");
    }
    else if (studentName!=studentName || class07Students.length<6) {
            class07Students.push(studentName);
        }
    else if (studentName==='Queen') {
            class07Students.push('Queen');
        }
    else if (studentName===studentName){
        console.log(studentName+" is already in class or sit limit is only six.");
    }
    
    // You write code here
}
addStudentToClass('Ashish');
addStudentToClass("John");
addStudentToClass("Mary");
addStudentToClass("Eli");
addStudentToClass("Illu");
addStudentToClass("Ashish");
addStudentToClass("Ram");
addStudentToClass("Extra");
addStudentToClass("Anuj");
addStudentToClass("");
addStudentToClass('Queen');
console.log(class07Students);
function getNumberOfStudents() {
    return class07Students.length;// You write code here
}
console.log(getNumberOfStudents());