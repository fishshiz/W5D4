Array.prototype.uniq = function () {
  const output = [];

  for (let i = 0; i < this.length; i++ ) {
    const currEl = this[i];

    if (output.includes(currEl)) {
      continue;
    } else {
      output.push(currEl);
    }
  }

  return output;
};

Array.prototype.twoSum = function () {
  const output = [];

  for (let i = 0; i < this.length - 1; i++) {
    const el1 = this[i];

    for (let j = i + 1; j < this.length; j++) {
      const el2 = this[j];

      if (el1 + el2 === 0) {
        output.push([i, j]);
      }
    }
  }

  return output;
};

Array.prototype.transpose = function () {
  const output = [[], [], []];

  for (let i = 0; i < this.length; i++) {

    for (let j = 0; j < this[i].length; j++) {
      const el = this[i][j];
      output[j].push(el);
    }
  }

  return output;
};
