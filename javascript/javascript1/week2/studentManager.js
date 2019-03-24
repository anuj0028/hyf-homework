const class07Students = [];
function getNumberOfStudents() {
    return class07Students.length;// You write code here
}
function addStudentToClass(studentName) {
    if (studentName=== "" ){
        console.log("You cannot add an empty string to a class");
    }
    else {
        if(!class07Students.includes(studentName)){
            if(getNumberOfStudents() <6 || studentName.toLowerCase() ==='queen'){
                class07Students.push(studentName);
                console.log(class07Students);
            }else{
                console.log("You cannot add an more than 6 students");
            }
        }else{
            console.log("Student "+ studentName +" is already in the class'");
        }
       
       
    }
    // You write code here
}
 addStudentToClass('Ashish');
 addStudentToClass('Ashish');
 addStudentToClass("John");
 addStudentToClass("Mary");
 addStudentToClass("Eli");
addStudentToClass("Illu"); 
addStudentToClass("Ram");
addStudentToClass("Ram");
addStudentToClass("Anuj");
addStudentToClass("");
addStudentToClass("Extra");
addStudentToClass("Ram");
addStudentToClass("queen");

console.log(getNumberOfStudents());