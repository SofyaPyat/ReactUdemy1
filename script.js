"use strict";

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.documentURI);

// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.getElementById("current"));
// console.log(document.querySelector("#current").parentNode.parentNode);

// console.log(document.querySelector('[data-current = "3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text")
    {
        continue;
    }
    console.log(node);
}

function pow (base, state) {
    if (state === 0)
        return 1;
    else 
        return pow(base, state - 1) * base;
}

console.log(pow(2, 4));
console.log(pow(13, 3));

console.log(pow(5,0));


let students = { 
    js: [{
        name: "John",
        progress: 100
    },
    {
        name: "Ivan",
        progress: 60
    }],

    html: {
        basic: [{
            name: "Peter",
            progress: 20
        },
        {
            name: "Ann",
            progress: 18
        }],
    pro: [
        {
            name: "Sam",
            progress: 10
        }
    ],
    semi: {
        students: [
            {
                name: "Test",
                progress: 100
            }
        ]
    }
    }
};

// function getTotalProgressByIteration (data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         }
//         else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i< subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }            
//         }
//     }
//     return total / students;
// }

function getTotalProgressByRecursion(data) {
    
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0,0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);

            total[0] += subDataArr[0];
            total[1] += subDataArr[1]; 
        }
        return total;
    }
}


// console.log(getTotalProgressByIteration(students));

const res = getTotalProgressByRecursion(students);
console.log(res[0]/res[1]);
