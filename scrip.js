const person = {
    name: "jon",
    gender: "male"
};


// const {name : fullName , age = 19, gender} = person;

// console.log(fullName, age);

// const animal = {
//     nick: "dog",
//     height: 10
// };

// let myObj = { ...animal, ...person };

// console.log(myObj);

function sleep(t) {
    let now = new Date().getTime();
    while (new Date().getTime() < now + t) {
        console.log('Sleeping.. ', now + t - new Date().getTime())
    }
}

function add(a, b) {
   sleep(4000);
    return a + b;
}

function promiseAdd(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (isNaN(a) || isNaN(b)) reject();

            resolve(a + b);
        }, 4000)
    })
}

async function asyncAdd() {
    console.log(await promiseAdd(10, 23));
    console.log('AFTER');
}

//promiseAdd(10, 23).then(sum => console.log(sum))
//console.log('AFTER')
asyncAdd()