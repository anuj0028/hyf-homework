function getFullname(firstname,surname,useFormalName) {
    var fullname1 = firstname;
    var fullname2 = surname;

    if (useFormalName === true) {
        return ('Lord '+fullname1+' '+fullname2)
    }
    else {
        return (fullname1+' '+fullname2)
    }
} 

getFullname(fullname1,fullname2);
console.log(getFullname);