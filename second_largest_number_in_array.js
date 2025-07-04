function secondLargest(arr) {
  if (arr.length < 2) return "Array should have at least two numbers";
  let first = -Infinity, second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second === -Infinity ? "No second largest found" : second;
}

console.log(secondLargest([0, 3, 5, 2, 7, 9])); //
