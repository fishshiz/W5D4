function range(start, end) { // 1, 5/ 1, 2/
  if (start > end) {
    return [];
  }
  return range(start, end - 1).concat(end);
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return sumRec(arr.slice(0, arr.length - 1)) + arr[arr.length - 1];
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return exponent(base, exp - 1) * base;
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp % 2 === 0) {
    let result = exponent2(base, (exp / 2));
    return result * result;
  } else {
    let result = exponent2(base, ((exp - 1) / 2));
    return result * result * base;
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }

  let lastFib = fibonacci(n - 1);
  let last = lastFib[lastFib.length - 1];
  let secondToLast = lastFib[lastFib.length - 2];

  return lastFib.concat(last + secondToLast);
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let mid = arr.length / 2;

  if (target > arr[mid]) {
    let newArr = arr.slice(mid);
    return mid + bsearch(newArr, target);
  } elsif (target < arr[mid]) {
    let newArr = arr.slice(0, mid);
    return bsearch(newArr, target);
  } elsif (target === arr[mid]) {
    return mid;
  }
}
