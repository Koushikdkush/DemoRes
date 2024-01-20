const arr = [1, 2, 4, 5, 6];
for (let i = 0; i < 3; i++) {
    let lastElement = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
        arr[j] = arr[j - 1];
    }
    arr[0] = lastElement;
}
console.log(arr);
