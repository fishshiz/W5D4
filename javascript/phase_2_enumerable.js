Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const el = this[i];

  callback(el);
  }
};

Array.prototype.myMap = function (callback) {
  const output = [];
  this.myEach( (el) => output.push(callback(el)) );
  return output;
};

Array.prototype.myReduce = function (callback, initial) {
  let acc;

  if (!initial) {
    acc = this[0];
    let newArr = this.slice(1, this.length);

    newArr.myEach( function(el) {
      acc = callback(acc, el);
    });
  } else {
    acc = initial;

    this.myEach( function(el) {
      acc = callback(acc, el);
    });
  }

  return acc;
};
