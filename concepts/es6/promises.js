let checkNum = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 100) + 1
    console.log(random)

    if (random % 2 === 0) {
        resolve('even number')
    }
    else {
        reject('odd number')
    }
});

checkNum
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
