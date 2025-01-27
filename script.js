//your JS code here. If required.
function manipulateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = arr.filter(num => num % 2 === 0);
                document.getElementById('output').textContent = `Even numbers: ${evenNumbers}`;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById('output').textContent = `Multiplied even numbers: ${multipliedNumbers}`;
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
}

manipulateData();
