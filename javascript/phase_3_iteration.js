Array.prototype.bubbleSort = function () {
  let output = this.slice();
  let sorted = false;

  while (sorted === false) {

    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      let el1 = output[i];
      let el2 = output[i + 1];

      if (el2 < el1) {
        sorted = false;
        let swap = output[i + 1]; // swap -> 3
        output[i + 1] = output[i];  // 3 -> 4
        output[i] = swap; // 4 -> swap
      }
    }
  }
  return output;
};

String.prototype.substrings = function () {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      output.push(this.slice(i, j));
    }
  }

  return output;
};
