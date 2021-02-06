// eslint-disable-next-line func-style
// function sumItems(array) {
//   let flatArr = flattenArray(array);
//   let sum = sumFlatArray(flatArr);
//   return sum;
// }
// // eslint-disable-next-line func-style
// function flattenArray(array) {
//   let flatArray = [];
//   array.forEach(item => {
//     if (Array.isArray(item)) {
//       flatArray = flatArray.concat(flattenArray(item));
//     } else {
//       flatArray.push(item);
//     }
//   });
//   return flatArray;
// }
// // eslint-disable-next-line func-style
// function sumFlatArray(array) {
//   if (array.length > 1) {
//     return array.pop() + sumFlatArray(array);
//   } else {
//     return array[0];
//   }
// }
// eslint-disable-next-line func-style
function sumItems(array) {
  let result = 0;
  array.forEach(item => {
    if (Array.isArray(item)) {
      result += sumItems(item);
    } else {
      result += item;
    }
  });
  return result;
}

module.exports = sumItems;