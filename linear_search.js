function linear_search(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(target === arr[i]) return i;
    }
    return -1;
}
console.log(linear_search([1, 4, 2, 3], 2))
