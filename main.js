array[(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)];

let max = array[0];
let min = array[0];

function myMax() {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      alert(max);
    }
  }
  if (array[i] < min) {
    min = array[i];
    alert(min);
  }
}
