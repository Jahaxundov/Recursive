"use strict"

let stu1 = {
    name: "Cahanir",
    surname: "Axundov",
    age: 29,
    email: "cahangir_axundov@icloud.com"
}

let stu2 = {
    name: "Ayxan",
    surname: "Imanov",
    age: 19,
    email: "ayxan@gmail.com"
}

let stu3 = {
    name: "Messi",
    surname: "Leo",
    age: 39,
    email: "leo@mail.ru"
}

let students = [stu1, stu2, stu3];

function searchByAge() {
    let count = 0;
    for (const student of students) {
        if (student.age > 18 && student.age < 25) {
            count++;
        }

    }
    return count;

}
console.log(searchByAge());


// let searchbyLetter=()=>{
//     let count=0;
//     for (const student of students) {
//         if(student.email.includes("c")) {
//             count++;
//         } 
//     }
//     console.log(count);
// }

// searchbyLetter();