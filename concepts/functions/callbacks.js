function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'Alice' };
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log(`User ID: ${data.id}, Name: ${data.name}`);
}

fetchData(displayData);
