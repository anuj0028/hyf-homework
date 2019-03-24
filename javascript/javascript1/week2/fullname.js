function getFullname(firstname,surname,useFormalName) {
 if(useFormalName){
    return 'Lord '+ firstname + ' ' + surname;
 }else{
    return firstname + ' ' + surname;
 }
 
} 

let fullname1 = getFullname('Krishna','Rana');
let fullname2 = getFullname('Krishna','Rana',true);

console.log(fullname1);
console.log(fullname2)